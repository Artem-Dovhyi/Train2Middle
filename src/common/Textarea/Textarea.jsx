import React from 'react';
import { StyledLabel, StyledTextarea } from './Textarea.styled';

export const Textarea = ({ labelText, placeholderText, onChange, name }) => {
	return (
		<StyledLabel htmlFor={name}>
			{labelText}
			<StyledTextarea
				name={name}
				id={name}
				placeholder={placeholderText}
				onChange={onChange}
			/>
		</StyledLabel>
	);
};
