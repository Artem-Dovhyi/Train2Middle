import styled from 'styled-components';

export const StyledTextarea = styled.textarea`
	min-height: 9rem;
	max-height: 15rem;
	width: 100%;
	padding: 1rem;
	border: 1px solid yellow;
	resize: vertical;
`;

export const StyledLabel = styled.label`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;
