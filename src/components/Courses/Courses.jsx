import React from 'react';
import { Button } from '../../common';
import { addNewCourseText } from '../../constants';
import { CourseCard, SearchBar } from './components';
import { CoursesContainer, CoursesList, TopBlock } from './Courses.styled';

export const Courses = () => {
	const arr = [1, 2];
	return (
		<CoursesContainer>
			<TopBlock>
				<SearchBar />
				<Button text={addNewCourseText} onClick={() => {}} />
			</TopBlock>
			<CoursesList>
				{arr.map((course) => (
					<CourseCard />
				))}
			</CoursesList>
		</CoursesContainer>
	);
};
