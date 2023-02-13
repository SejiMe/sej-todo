import React from 'react';

type InputProps = React.DetailedHTMLProps<
	React.AllHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
> & { variant: 'light' | 'dark' };

const InputText = React.forwardRef<HTMLInputElement, InputProps>(
	(props, ref) => {
		return (
			<>
				<input
					type='text'
					{...props}
					ref={ref}
				/>
			</>
		);
	}
);

InputText.displayName = 'InputText';
export default InputText;
