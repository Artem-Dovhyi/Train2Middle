import React from 'react';
import { CourseDetailsItem } from '..';

import { Button } from '../../../../common';

import {
	AUTHORS_TEXT,
	CREATED_TEXT,
	DURATION_TEXT,
	SHOW_COURSE_TEXT,
} from '../../../../constants';

import {
	convertDateFormat,
	filterById,
	timeConvert,
} from '../../../../helpers';

import {
	CourseCardContainer,
	CourseDetailsList,
	LeftBlock,
	RightBlock,
} from './CourseCard.styled';

export const CourseCard = ({ course, authorsList }) => {
	const { title, description, duration, authors, creationDate } = course;

	const filteredAuthors = filterById(authors, authorsList);
	const authorsString = filteredAuthors.map((author) => author.name).join(', ');

	const convertedDuration = timeConvert(duration);
	const convertedDate = convertDateFormat(creationDate);

	return (
		<CourseCardContainer>
			<LeftBlock>
				<h1>{title}</h1>
				<p>{description}</p>
			</LeftBlock>
			<RightBlock>
				<CourseDetailsList>
					<CourseDetailsItem
						title={AUTHORS_TEXT}
						contentString={authorsString}
					/>
					<CourseDetailsItem
						title={DURATION_TEXT}
						contentString={convertedDuration + ' hours'}
					/>
					<CourseDetailsItem
						title={CREATED_TEXT}
						contentString={convertedDate}
					/>
				</CourseDetailsList>
				<Button handleClick={() => {}} text={SHOW_COURSE_TEXT} />
			</RightBlock>
		</CourseCardContainer>
	);
};
