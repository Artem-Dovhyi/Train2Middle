import React, { useEffect, useState } from 'react';

import { Button } from '../../common';
import { CourseCard, SearchBar } from './components';

import { ADD_NEW_COURSE_TEXT } from '../../constants';
import { searchFilter } from '../../helpers';

import { CoursesContainer, CoursesList, CoursesHeader } from './Courses.styled';

export const Courses = ({ courses, authorsList, openForm }) => {
	const [searchText, setSearchText] = useState('');
	const [filteredCourses, setFilteredCourses] = useState(courses);

	const onSearchChange = (e) => {
		const { value } = e.target;
		setSearchText(value);
		if (!value) setFilteredCourses(searchFilter(courses, ''));
	};

	const onSearchClick = () => {
		setFilteredCourses(searchFilter(courses, searchText));
	};

	useEffect(() => {
		setFilteredCourses(searchFilter(courses, ''));
	}, [courses, authorsList]);

	return (
		<CoursesContainer>
			<CoursesHeader>
				<SearchBar
					value={searchText}
					onSearchChange={onSearchChange}
					onSearchClick={onSearchClick}
				/>
				<Button text={ADD_NEW_COURSE_TEXT} handleClick={openForm} />
			</CoursesHeader>
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
