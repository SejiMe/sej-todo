import React from 'react';

type Props = {
	
	children?: React.ReactNode
};

const Card = ({ children }: Props) => {
	return <div className='shadow-lg bg-blue-500 text-beige-500 py-2 px-6 rounded-md flex flex-col w-64 border-2 border-collapse border-beige-500'>
		{ children }
		</div>
};

export default Card;
