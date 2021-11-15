import React from 'react';

import { Button, Input } from '../../../../common';

import { SEARCH_PLACEHOLDER_TEXT, SEARCH_TEXT } from '../../../../constants';

import { SearchBarContainer } from './SearchBar.styled';

export const SearchBar = ({ onSearchChange, value, onSearchClick }) => {
	return (
		<SearchBarContainer>
			<Input
				placeholderText={SEARCH_PLACEHOLDER_TEXT}
				onChange={onSearchChange}
				value={value}
				name='search'
			/>
			<Button text={SEARCH_TEXT} handleClick={() => onSearchClick()} />
		</SearchBarContainer>
	);
};
