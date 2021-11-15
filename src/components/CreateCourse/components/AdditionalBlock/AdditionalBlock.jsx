import React, { useState } from 'react';

import { AdditionalItem, AuthorList } from '..';
import { Button, Input } from '../../../../common';

import {
	ADD_AUTHOR_TEXT,
	AUTHORS_TEXT,
	AUTHOR_NAME_TEXT,
	COURSE_AUTHORS_TEXT,
	CREATE_AUTHOR_TEXT,
	DELETE_AUTHOR_TEXT,
	DURATION_ERROR_TEXT,
	DURATION_TEXT,
	ENTER_AUTHOR_NAME_TEXT,
	ENTER_DURATION_TEXT,
	LENGTH_ERROR_TEXT,
} from '../../../../constants';

import { timeConvert } from '../../../../helpers';

import { DurationInfo, StyledAdditionalBlock } from './AdditionalBlock.styled';

export const AdditionalBlock = ({
	duration,
	deleteAuthor,
	addAuthor,
	durationOnChange,
	createAuthor,
	availableAuthors,
	filteredAuthors,
}) => {
	const [authorName, setAuthorName] = useState('');

	const handleCreateAuthor = (e) => {
		e.preventDefault();
		createAuthor(authorName);
		setAuthorName('');
	};

	const formattedDuration = timeConvert(duration);

	return (
		<StyledAdditionalBlock>
			<AdditionalItem title={ADD_AUTHOR_TEXT}>
				<Input
					name='author_name'
					labelText={AUTHOR_NAME_TEXT}
					placeholderText={ENTER_AUTHOR_NAME_TEXT}
					value={authorName}
					onChange={(e) => setAuthorName(e.target.value)}
					isError={authorName.length <= 2}
					errorText={LENGTH_ERROR_TEXT}
				/>
				<Button text={CREATE_AUTHOR_TEXT} handleClick={handleCreateAuthor} />
			</AdditionalItem>
			<AdditionalItem title={AUTHORS_TEXT}>
				<AuthorList
					array={availableAuthors}
					handleClick={addAuthor}
					buttonText={ADD_AUTHOR_TEXT}
				/>
			</AdditionalItem>
			<AdditionalItem title={DURATION_TEXT}>
				<Input
					name='duration'
					labelText={DURATION_TEXT}
					placeholderText={ENTER_DURATION_TEXT}
					value={duration}
					onChange={durationOnChange}
					isError={duration <= 0}
					errorText={DURATION_ERROR_TEXT}
				/>
				<DurationInfo>
					Duration: <b>{formattedDuration}</b> hours
				</DurationInfo>
			</AdditionalItem>
			<AdditionalItem title={COURSE_AUTHORS_TEXT}>
				<AuthorList
					array={filteredAuthors}
					handleClick={deleteAuthor}
					buttonText={DELETE_AUTHOR_TEXT}
				/>
			</AdditionalItem>
		</StyledAdditionalBlock>
	);
};
