import React from 'react';
import { StyledButton } from './Button.styled';

export const Button = ({ text, handleClick }) => (
	<StyledButton onClick={handleClick}>{text}</StyledButton>
);
