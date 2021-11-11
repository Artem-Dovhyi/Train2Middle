import React from 'react';
import { Button, Input } from '../../../../common';
import { searchPlaceholderText, searchText } from '../../../../constants';
import { SearchBarContainer } from './SearchBar.styled';

export const SearchBar = () => {
	return (
		<SearchBarContainer>
			<Input
				placeholderText={searchPlaceholderText}
				labelText=''
				onChange={() => {}}
				htmlFor={searchText}
			/>
			<Button text={searchText} onClick={() => {}} />
		</SearchBarContainer>
	);
};
