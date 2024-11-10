import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { PageError } from 'widgets/PageError';

interface ErrorBoundaryProps {
	children: ReactNode;
	// fallback: ReactNode
}

interface ErrorBoundaryState {
	hasError: boolean;
}

class ErrorBoundary
	extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error:Error, errorInfo:ErrorInfo) {
		// Example "componentStack":
		//   in ComponentThatThrows (created by App)
		//   in ErrorBoundary (created by App)
		//   in div (created by App)
		//   in App
		// logErrorToMyService(error, info.componentStack);

		// eslint-disable-next-line no-console
		console.log('Error: ', error, 'ErrorInfo:', errorInfo);
	}

	render() {
		const { hasError } = this.state;
		const { children } = this.props;
		// const { fallback } = this.props;
		if (hasError) {
			// You can render any custom fallback UI
			// return fallback;
			return (
				<Suspense fallback="">
					<PageError />
				</Suspense>
			);
		}

		return children;
	}
}

export default ErrorBoundary;
