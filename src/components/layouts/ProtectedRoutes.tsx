import { useSession } from 'next-auth/react';
import React from 'react';

type Props = { children?: React.ReactNode };

const ProtectedRoutes = (props: Props): JSX.Element => {
	const session = useSession();
	console.log('protected routes');
	console.log(session);
	return <>{props.children}</>;
};

export default ProtectedRoutes;
