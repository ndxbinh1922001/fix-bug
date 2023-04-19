import type { AppProps } from 'next/app';
import '../css/global.css';
import { store } from '../stores/store';
import { Provider } from 'react-redux';
import ErrorBoundary from '../components/ErrorBoundary';
import { EmptyLayout } from '../components/layout';
import { AppPropsWithLayout } from '../models/index';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const Layout = Component.Layout ?? EmptyLayout;
	return (
		<Provider store={store}>
			<Layout>
				<ErrorBoundary>
					<Component {...pageProps} />
				</ErrorBoundary>
			</Layout>
		</Provider>
	);
}

export default MyApp;
