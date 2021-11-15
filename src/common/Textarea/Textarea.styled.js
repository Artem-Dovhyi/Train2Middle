import styled from 'styled-components';

export const StyledTextarea = styled.textarea`
	min-height: 9rem;
	max-height: 15rem;
	padding: 1rem;
	border: 1px solid yellow;
	resize: vertical;
`;

export const StyledLabel = styled.label`
	span {
		color: red;
	}
`;

export const StyledTextareaContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	width: 100%;
`;
