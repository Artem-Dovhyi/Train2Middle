import React from 'react';
import { Button } from '../../../../common';
import { showCourse } from '../../../../constants';
import {
	CourseCardContainer,
	CourseInfo,
	LeftBlock,
	RightBlock,
} from './CourseCard.styled';
import { filterById, timeConvert } from '../../../../helpers';

export const CourseCard = ({ course, authorsList }) => {
	const { title, description, duration, authors } = course;

	const filteredAuthors = filterById(authors, authorsList);
	const authorsString = filteredAuthors.map((author) => author.name).join(', ');

	const convertedDuration = timeConvert(duration);
	return (
		<CourseCardContainer>
			<LeftBlock>
				<h1>{title}</h1>
				<p>{description}</p>
			</LeftBlock>
			<RightBlock>
				<CourseInfo>
					<li>
						<b>Authors: </b>
						{authorsString}
					</li>
					<li>
						<b>Duration: </b>
						{convertedDuration} hours
					</li>
					<li>
						<b>Created: </b>01.02.2018
					</li>
				</CourseInfo>
				<Button handleClick={() => {}} text={showCourse} />
			</RightBlock>
		</CourseCardContainer>
	);
};
