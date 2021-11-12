import styled from 'styled-components';

export const CreateCourseContainer = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const TopBlock = styled.div`
	display: grid;
	grid-template:
		'title button' auto
		'textarea textarea' max-content / 40% auto;
	justify-content: space-between;
	align-items: flex-end;
	gap: 1rem;
`;

export const InputContainer = styled.div`
	grid-area: title;
	width: 100%;
`;
export const ButtonContainer = styled.div`
	grid-area: button;
`;
export const TextareaContainer = styled.div`
	grid-area: textarea;
	align-self: normal;
`;

export const AdditionalBlock = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 2rem;
	padding: 3rem 1rem;
	border: 1px solid darkgray;

	& > div {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		width: 100%;
		h2 {
			font-size: 24px;
		}
	}
`;

export const AuthorsList = styled.ul`
	width: 80%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const DurationInfo = styled.div`
	font-size: 28px;
	width: 100%;
`;
