import React, { useEffect, useState } from 'react';
import { Button } from '../../common';
import { addNewCourseText } from '../../constants';
import { searchFilter } from '../../helpers';
import { CourseCard, SearchBar } from './components';
import { CoursesContainer, CoursesList, TopBlock } from './Courses.styled';

export const Courses = ({ courses, authorsList, openForm }) => {
	const [searchText, setSearchText] = useState('');
	const [filteredCourses, setFilteredCourses] = useState(courses);

	const onSearchChange = (e) => {
		const { value } = e.target;
		setSearchText(value);
		if (!value) setFilteredCourses(searchFilter(courses, searchText));
	};

	const onSearchClick = () => {
		setFilteredCourses(searchFilter(courses, searchText));
	};

	useEffect(() => {
		setFilteredCourses(searchFilter(courses, ''));
	}, [courses, authorsList]);

	return (
		<CoursesContainer>
			<TopBlock>
				<SearchBar
					value={searchText}
					onSearchChange={onSearchChange}
					onSearchClick={onSearchClick}
				/>
				<Button text={addNewCourseText} handleClick={() => openForm(true)} />
			</TopBlock>
			<CoursesList>
				{filteredCourses.map((course) => (
					<CourseCard
						key={course.id}
						course={course}
						authorsList={authorsList}
					/>
				))}
			</CoursesList>
		</CoursesContainer>
	);
};
