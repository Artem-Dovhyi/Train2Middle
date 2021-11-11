import React from 'react';
import { Button } from '../../../../common';
import { showCourse } from '../../../../constants';
import {
	ButtonContainer,
	CourseCardContainer,
	CourseInfo,
	LeftBlock,
	RightBlock,
} from './CourseCard.styled';

export const CourseCard = () => {
	return (
		<CourseCardContainer>
			<LeftBlock>
				<h1>Java</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
					sequi architecto quisquam numquam culpa ipsa, minus possimus harum,
					pariatur, eligendi temporibus! Eum fugit iusto quibusdam quasi
					deleniti obcaecati voluptate commodi!
				</p>
			</LeftBlock>
			<RightBlock>
				<CourseInfo>
					<li>
						<b>Authors: </b>Lorem ipsum, dolor sit, Lorem, ipsum. Lorem ipsum
						dolor sit.
					</li>
					<li>
						<b>Duration: </b>08:00 hours
					</li>
					<li>
						<b>Created: </b>01.02.2018
					</li>
				</CourseInfo>
				<ButtonContainer>
					<Button onClick={() => {}} text={showCourse} />
				</ButtonContainer>
			</RightBlock>
		</CourseCardContainer>
	);
};
