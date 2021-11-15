import React from 'react';

import { Button, Input, Textarea } from '../../../../common';

import {
	CREATE_COURSE_TEXT,
	ENTER_DESCRIPTION_TEXT,
	ENTER_TITLE_TEXT,
	LENGTH_ERROR_TEXT,
} from '../../../../constants';

import {
	ButtonContainer,
	TextareaContainer,
	TitleInputContainer,
	TopBlock,
} from './GeneralBlock.styled';

export const GeneralBlock = ({
	title,
	description,
	generalOnChange,
	handleSubmit,
}) => {
	return (
		<TopBlock>
			<TitleInputContainer>
				<Input
					name='title'
					labelText='Title'
					placeholderText={ENTER_TITLE_TEXT}
					value={title}
					onChange={generalOnChange}
					isError={title.length <= 2}
					errorText={LENGTH_ERROR_TEXT}
				/>
			</TitleInputContainer>
			<ButtonContainer>
				<Button text={CREATE_COURSE_TEXT} handleClick={handleSubmit} />
			</ButtonContainer>
			<TextareaContainer>
				<Textarea
					name='description'
					labelText='Description'
					placeholderText={ENTER_DESCRIPTION_TEXT}
					value={description}
					onChange={generalOnChange}
					isError={description.length <= 2}
					errorText={LENGTH_ERROR_TEXT}
				/>
			</TextareaContainer>
		</TopBlock>
	);
};
