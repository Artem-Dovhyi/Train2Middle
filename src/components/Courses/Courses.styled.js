import styled from 'styled-components';

export const CoursesContainer = styled.main`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1rem;
	border: 1px solid blue;
`;

export const TopBlock = styled.div`
	display: grid;
	grid-template-columns: 36rem 12rem;
	justify-content: space-between;
	align-items: center;
	height: 2.25rem;
`;

export const CoursesList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
