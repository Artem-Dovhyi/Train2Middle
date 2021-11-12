import React, { useState } from 'react';
import { v4 } from 'uuid';

import './App.css';
import { Container, MainContent } from './App.styled';
import { Courses, Header, CreateCourse } from './components';
import { mockedAuthorsList, mockedCoursesList } from './constants';

function App() {
	const [courses, setCourses] = useState(mockedCoursesList);
	const [authorsList, setAuthorsList] = useState(mockedAuthorsList);

	const [isFormActive, setFormActive] = useState(false);

	const createAuthor = (authorName) => {
		const newAuthor = { id: v4(), name: authorName };
		setAuthorsList((prevState) => {
			return [...prevState, newAuthor];
		});
	};

	const createCourse = (course) => {
		setCourses((prevState) => [...prevState, course]);
		setFormActive(false);
	};

	return (
		<Container>
			<Header />
			<MainContent>
				{isFormActive && (
					<CreateCourse
						authorsList={authorsList}
						createAuthor={createAuthor}
						createCourse={createCourse}
					/>
				)}

				<Courses
					courses={courses}
					authorsList={authorsList}
					openForm={setFormActive}
				/>
			</MainContent>
		</Container>
	);
}

export default App;
