import React from 'react';
import { StyledInput, StyledInputContainer, StyledLabel } from './Input.styled';

export const Input = ({
	labelText = '',
	placeholderText = '',
	onChange = () => {},
	value,
	name,
	isError = false,
	errorText = 'Error',
	type = 'text',
}) => {
	return (
		<StyledInputContainer>
			<StyledLabel htmlFor={name}>
				{labelText}
				{isError && <span> | {errorText}</span>}
			</StyledLabel>
			<StyledInput
				type={type}
				placeholder={placeholderText}
				onChange={onChange}
				value={value}
				id={name}
				name={name}
			/>
		</StyledInputContainer>
	);
};
