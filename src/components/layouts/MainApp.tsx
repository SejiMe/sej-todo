import React from 'react';
import Header from './Header';
import Footer from './Footer';

type Props = {
	children?: React.ReactNode;
};

function MainApp(props: Props): JSX.Element {
	return (
		<>
			<Header />
			{/* bg-gradient-to-r from-blue-800 to-indigo-900 */}
			{/* bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-neutral-700 via-teal-600 to-purple-700 */}
			{/* bg-gradient-to-b from-sky-300 via-emerald-300 to-blue-300  */}
			<main
				className='flex min-h-screen flex-col 
			bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500 via-blue-400 to-blue-500'
			>
				{props.children}
			</main>
			<Footer />
		</>
	);
}

export default MainApp;
