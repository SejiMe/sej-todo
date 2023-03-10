import { type AppType } from 'next/app';
import { type Session } from 'next-auth';
import { SessionProvider, useSession } from 'next-auth/react';

import { api } from '../utils/api';

import '../styles/globals.css';
import ProtectedRoutes from '../components/layouts/ProtectedRoutes';

const MyApp: AppType<{ session: Session | null }> = ({
	Component,
	pageProps: { session, ...pageProps },
}) => {
	return (
		<SessionProvider session={session}>
			<Component {...pageProps} />
		</SessionProvider>
	);
};

export default api.withTRPC(MyApp);
