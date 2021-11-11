import React from 'react';
import { StyledButton } from './Button.styled';

export const Button = ({ text, onClick }) => (
	<StyledButton onClick={onClick}>{text}</StyledButton>
);
