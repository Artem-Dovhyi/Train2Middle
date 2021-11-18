import React from 'react';
import {
	StyledInput,
	StyledInputContainer,
	StyledLabel,
	ErrorText,
} from './Input.styled';

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
			<StyledLabel htmlFor={name}>{labelText}</StyledLabel>
			<StyledInput
				type={type}
				placeholder={placeholderText}
				onChange={onChange}
				value={value}
				id={name}
				name={name}
			/>
			{isError && <ErrorText>{errorText}</ErrorText>}
		</StyledInputContainer>
	);
};
