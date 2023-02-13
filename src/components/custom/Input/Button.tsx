import classNames from 'classnames';
import React from 'react';

type Props = {
	type: 'button' | 'submit';
	children?: React.ReactNode;
	onClick?: MouseEvent;
	classname?: string
};

const Button = (props: Props) => {
	return <button type={props.type} className={classNames('border-2 p-2 rounded-md flex font-mono', props.classname)}>{props.children}</button>;
};

export default Button;
