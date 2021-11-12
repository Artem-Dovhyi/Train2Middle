import React from 'react';
import { StyledInput, StyledLabel } from './Input.styled';

export const Input = ({
	labelText = '',
	placeholderText = '',
	onChange = () => {},
	value,
	name,
	type = 'text',
}) => {
	return (
		<StyledLabel htmlFor={name}>
			{labelText}
			<StyledInput
				type={type}
				placeholder={placeholderText}
				onChange={onChange}
				value={value}
				id={name}
				name={name}
			/>
		</StyledLabel>
	);
};
