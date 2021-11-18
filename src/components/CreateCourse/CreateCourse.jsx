import React, { useState } from 'react';

import { v4 } from 'uuid';

import { CourseDetailsForm, CourseInfoForm } from './components';

import { filterById, excludeById, getCurrentDate } from '../../helpers';

import { CreateCourseContainer } from './CreateCourse.styled';

const courseInitialForm = {
	id: v4(),
	title: '',
	description: '',
	creationDate: getCurrentDate(),
	duration: '',
	authors: [],
};

export const CreateCourse = ({ authorsList, createAuthor, createCourse }) => {
	const [courseForm, setCourseForm] = useState(courseInitialForm);
	const { title, description, duration, authors } = courseForm;

	const generalOnChange = (e) => {
		const { value, name } = e.target;
		setCourseForm((prevState) => ({ ...prevState, [name]: value }));
	};

	const durationOnChange = (e) => {
		const { value } = e.target;
		const regexp = new RegExp('^[0-9]*$');
		if (value.length < 6 && regexp.test(value)) {
			setCourseForm((prevState) => ({ ...prevState, duration: value }));
		}
	};

	const addAuthor = (authorId) => {
		setCourseForm((prevState) => ({
			...prevState,
			authors: [...prevState.authors, authorId],
		}));
	};

	const deleteAuthor = (authorId) => {
		setCourseForm((prevState) => ({
			...prevState,
			authors: [...prevState.authors.filter((id) => id !== authorId)],
		}));
	};

	const isFormValid = () => {
		return (
			title.length > 2 && description.length > 2 && duration && authors.length
		);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (isFormValid()) {
			createCourse(courseForm);
			setCourseForm(courseInitialForm);
		} else alert('Please, fill in all fields');
	};

	const availableAuthors = excludeById(authors, authorsList);
	const filteredAuthors = filterById(authors, authorsList);

	return (
		<CreateCourseContainer>
			<CourseInfoForm
				title={title}
				description={description}
				generalOnChange={generalOnChange}
				handleSubmit={handleSubmit}
			/>
			<CourseDetailsForm
				createAuthor={createAuthor}
				duration={duration}
				deleteAuthor={deleteAuthor}
				addAuthor={addAuthor}
				durationOnChange={durationOnChange}
				availableAuthors={availableAuthors}
				filteredAuthors={filteredAuthors}
			/>
		</CreateCourseContainer>
	);
};
