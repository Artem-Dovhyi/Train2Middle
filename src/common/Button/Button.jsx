import React from 'react';
import { StyledButton } from './Button.styled';

export const Button = ({ text, handleClick, type = 'button' }) => (
	<StyledButton type={type} onClick={handleClick}>
		{text}
	</StyledButton>
);
