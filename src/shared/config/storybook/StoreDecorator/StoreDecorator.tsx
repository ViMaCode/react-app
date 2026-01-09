import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { Suspense } from 'react';

export const StoreDecorator = (
	initialState?: DeepPartial<StateSchema>,
): Decorator => (Story) => (
	<StoreProvider initialState={initialState}>
		<Suspense fallback="">
			<Story />
		</Suspense>
	</StoreProvider>
);
