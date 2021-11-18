import React from 'react';
import {
	StyledLabel,
	StyledTextarea,
	StyledTextareaContainer,
	ErrorText,
} from './Textarea.styled';

export const Textarea = ({
	labelText = '',
	placeholderText = '',
	onChange = () => {},
	value,
	name,
	isError = false,
	errorText = 'Error',
}) => {
	return (
		<StyledTextareaContainer>
			<StyledLabel htmlFor={name}>{labelText}</StyledLabel>
			<StyledTextarea
				name={name}
				id={name}
				placeholder={placeholderText}
				onChange={onChange}
			/>
			{isError && <ErrorText> | {errorText}</ErrorText>}
		</StyledTextareaContainer>
	);
};
