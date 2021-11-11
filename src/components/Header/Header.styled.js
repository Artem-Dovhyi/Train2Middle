import styled from 'styled-components';

export const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid black;
	padding: 1rem;
`;

export const LogoContainer = styled.div`
	width: 4rem;
	height: 4rem;
`;

export const RightBlock = styled.div`
	display: grid;
	grid-template-columns: 1fr 7.5rem;
	align-items: center;
	gap: 1rem;
`;
