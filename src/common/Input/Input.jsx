import React from 'react';
import { StyledInput } from './Input.styled';

export const Input = ({ labelText, placeholderText, onChange }) => {
	return (
		<form>
			<label>
				{labelText}
				<StyledInput
					type='text'
					placeholder={placeholderText}
					onChange={onChange}
				/>
			</label>
		</form>
	);
};
