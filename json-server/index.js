const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');
const i18n = require('i18next');
const Backend = require('i18next-fs-backend');

// Функция для извлечения языка из заголовка
function getLanguageFromHeader(acceptLanguage, customLanguage) {
	// Приоритет: кастомный заголовок > Accept-Language
	if (customLanguage) {
		return customLanguage.split('-')[0];
	}
	if (!acceptLanguage) {
		return 'en';
	}
	return acceptLanguage.split(',')[0].split('-')[0];
}

// синхронная загрузка переводов
const enTranslations = JSON.parse(
	fs.readFileSync(path.resolve(__dirname, '../public/locales/en/translation.json'), 'utf-8'),
);
const ruTranslations = JSON.parse(
	fs.readFileSync(path.resolve(__dirname, '../public/locales/ru/translation.json'), 'utf-8'),
);

i18n
	.use(Backend)
	.init({
		lng: 'en', // язык по умолчанию
		fallbackLng: 'en',
		resources: {
			en: { translation: enTranslations },
			ru: { translation: ruTranslations },
		},
	});

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
	await new Promise((res) => {
		setTimeout(res, 800);
	});
	next();
});

// Эндпоинт для логина
server.post('/login', (req, res) => {
	try {
		const { username, password } = req.body;
		const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
		const { users = [] } = db;

		const userFromBd = users.find(
			(user) => user.username === username && user.password === password,
		);

		if (userFromBd) {
			return res.json(userFromBd);
		}

		// Можно динамически менять язык на основе заголовка запроса
		const language = getLanguageFromHeader(
			req.headers['accept-language'],
			req.headers['x-app-language'], // ← Читаем кастомный заголовок
		);
		return res.status(403).json({
			message: i18n.t('User not found', { lng: language }),
		});
	} catch (e) {
		return res.status(500).json({ message: e.message });
	}
});

// проверяем, авторизован ли пользователь
// eslint-disable-next-line
server.use((req, res, next) => {
	if (!req.headers.authorization) {
		const language = getLanguageFromHeader(req.headers['accept-language']);
		return res.status(403).json({
			message: i18n.t('Authorization error', { lng: language }),
		});
	}

	next();
});

server.use(router);

// запуск сервера
server.listen(8000, () => {
	console.log('server is running on 8000 port');
});
