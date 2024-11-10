import { classNames } from './classNames';

describe('classNames', () => {
	test('with only first param', () => {
		expect(classNames('someClass')).toBe('someClass');
	});

	test('with additional class', () => {
		const expected = ('someClass oneClass twoClass');
		expect(classNames('someClass', {}, ['oneClass', 'twoClass']))
			.toBe(expected);
	});

	test('with mods', () => {
		const expected = ('someClass oneClass twoClass hovered scrollable');
		expect(classNames(
			'someClass',
			{ hovered: true, scrollable: true },
			['oneClass', 'twoClass'],
		)).toBe(expected);
	});

	test('with mods false', () => {
		const expected = ('someClass oneClass twoClass hovered');
		expect(classNames(
			'someClass',
			{ hovered: true, scrollable: false },
			['oneClass', 'twoClass'],
		)).toBe(expected);
	});

	test('with mods undefined', () => {
		const expected = ('someClass oneClass twoClass hovered');
		expect(classNames(
			'someClass',
			{ hovered: true, scrollable: undefined },
			['oneClass', 'twoClass'],
		)).toBe(expected);
	});
});
