import React, { useState } from 'react';
import { v4 } from 'uuid';

import { Courses, Header, CreateCourse } from './components';

import { mockedAuthorsList, mockedCoursesList } from './constants';

import './App.css';
import { Container, MainContent } from './App.styled';

function App() {
	const [courses, setCourses] = useState(mockedCoursesList);
	const [authorsList, setAuthorsList] = useState(mockedAuthorsList);

	const [isFormActive, toggleFormActive] = useState(false);

	const createAuthor = (authorName) => {
		const newAuthor = { id: v4(), name: authorName };
		setAuthorsList((prevState) => {
			return [...prevState, newAuthor];
		});
	};

	const createCourse = (course) => {
		setCourses((prevState) => [...prevState, course]);
		toggleFormActive(false);
	};

	return (
		<Container>
			<Header />
			<MainContent>
				{isFormActive ? (
					<CreateCourse
						authorsList={authorsList}
						createAuthor={createAuthor}
						createCourse={createCourse}
					/>
				) : (
					<Courses
						courses={courses}
						authorsList={authorsList}
						openForm={() => toggleFormActive(true)}
					/>
				)}
			</MainContent>
		</Container>
	);
}

export default App;
