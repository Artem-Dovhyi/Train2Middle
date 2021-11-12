import React, { useState } from 'react';
import moment from 'moment';
import { v4 } from 'uuid';
import { Button, Input, Textarea } from '../../common';
import {
	AdditionalBlock,
	AuthorsList,
	ButtonContainer,
	CreateCourseContainer,
	TextareaContainer,
	InputContainer,
	TopBlock,
	DurationInfo,
} from './CreateCourse.styled';
import {
	addAuthorText,
	createAuthorText,
	createCourseText,
	deleteAuthorText,
	enterAuthorNameText,
	enterDescriptionText,
	enterDurationText,
	enterTitleText,
} from '../../constants';
import { filterById, timeConvert } from '../../helpers';
import { AuthorItem } from './components';
import { excludeById } from '../../helpers/filters';

export const courseInitialForm = {
	id: v4(),
	title: '',
	description: '',
	creationDate: moment().format('d/m/yyyy'),
	duration: '',
	authors: [],
};

export const CreateCourse = ({ authorsList, createAuthor, createCourse }) => {
	const [courseForm, setCourseForm] = useState(courseInitialForm);
	const { title, description, duration, authors } = courseForm;

	const [authorName, setAuthorName] = useState('');

	const availableAuthors = excludeById(authors, authorsList);

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

	const handleCreateAuthor = () => {
		createAuthor(authorName);
		setAuthorName('');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (title && description && duration && authors.length) {
			createCourse(courseForm);
			setCourseForm(courseInitialForm);
		} else alert('Please, fill in all fields');
	};

	const filteredAuthors = filterById(authors, authorsList);
	const formattedDuration = timeConvert(duration);

	return (
		<CreateCourseContainer>
			<TopBlock>
				<InputContainer>
					<Input
						name='title'
						labelText='Title'
						placeholderText={enterTitleText}
						value={title}
						onChange={generalOnChange}
					/>
				</InputContainer>
				<ButtonContainer>
					<Button text={createCourseText} handleClick={handleSubmit} />
				</ButtonContainer>
				<TextareaContainer>
					<Textarea
						name='description'
						labelText='Description'
						placeholderText={enterDescriptionText}
						value={description}
						onChange={generalOnChange}
					/>
				</TextareaContainer>
			</TopBlock>
			<AdditionalBlock>
				<div>
					<h2>Add author</h2>
					<InputContainer>
						<Input
							name='author_name'
							labelText='Author name'
							placeholderText={enterAuthorNameText}
							value={authorName}
							onChange={(e) => setAuthorName(e.target.value)}
						/>
					</InputContainer>
					<Button text={createAuthorText} handleClick={handleCreateAuthor} />
				</div>
				<div>
					<h2>Authors</h2>
					<AuthorsList>
						{availableAuthors.map(({ id, name }) => (
							<AuthorItem
								key={id}
								id={id}
								name={name}
								handleClick={addAuthor}
								buttonText={addAuthorText}
							/>
						))}
					</AuthorsList>
				</div>
				<div>
					<h2>Duration</h2>
					<InputContainer>
						<Input
							name='duration'
							labelText='Duration'
							placeholderText={enterDurationText}
							value={duration}
							onChange={durationOnChange}
						/>
					</InputContainer>
					<DurationInfo>
						Duration: <b>{formattedDuration}</b> hours
					</DurationInfo>
				</div>
				<div>
					<h2>Course authors</h2>
					{!filteredAuthors.length && <p>Author list is empty</p>}
					<AuthorsList>
						{filteredAuthors.map(({ id, name }) => (
							<AuthorItem
								key={id}
								id={id}
								name={name}
								buttonText={deleteAuthorText}
								handleClick={deleteAuthor}
							/>
						))}
					</AuthorsList>
				</div>
			</AdditionalBlock>
		</CreateCourseContainer>
	);
};
