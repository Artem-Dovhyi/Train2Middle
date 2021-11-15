import React from 'react';
import {
	StyledLabel,
	StyledTextarea,
	StyledTextareaContainer,
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
			<StyledLabel htmlFor={name}>
				{labelText}
				{isError && <span> | {errorText}</span>}
			</StyledLabel>
			<StyledTextarea
				name={name}
				id={name}
				placeholder={placeholderText}
				onChange={onChange}
			/>
		</StyledTextareaContainer>
	);
};
