import React from 'react';

type Props = {
	type: 'button' | 'submit';
	children?: React.ReactNode;
	onClick: MouseEvent;
};

const Button = (props: Props) => {
	return <button type={props.type}>{props.children}</button>;
};

export default Button;
