import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';
import { api } from '../../utils/api';

function Header() {
	const hello = api.example.hello.useQuery({ text: 'from tRPC' });
	return (
		<header className='flex justify-between py-4'>
			<h1 className='ml-10'>This is the Header</h1>
			{hello.data ? <h3>{hello.data.greeting}</h3> : 'Loading Query'}
			<AuthShowcase />
		</header>
	);
}

export default Header;

const AuthShowcase: React.FC = () => {
	const { data: sessionData } = useSession();

	const { data: secretMessage } =
		api.example.getSecretMessage.useQuery(
			undefined, // no input
			{ enabled: sessionData?.user !== undefined }
		);

	return (
		<div className='mr-10 flex items-center justify-center gap-4'>
			<p className='text-center text-2xl text-blue-500'>
				{sessionData && (
					<span>Logged in as {sessionData.user?.email}</span>
				)}
				{secretMessage && <span> - {secretMessage}</span>}
			</p>
			<button
				className='rounded-full border-2 border-blue-500 bg-white/10 px-10 py-3 font-semibold text-blue-500 no-underline transition hover:bg-white/20'
				onClick={
					sessionData
						? () => void signOut()
						: () => void signIn()
				}
			>
				{sessionData ? 'Sign out' : 'Sign in'}
			</button>
		</div>
	);
};
