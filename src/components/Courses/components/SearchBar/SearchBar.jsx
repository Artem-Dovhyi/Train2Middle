import React from 'react';
import { Button, Input } from '../../../../common';
import { searchPlaceholderText, searchText } from '../../../../constants';
import { SearchBarContainer } from './SearchBar.styled';

export const SearchBar = ({ onSearchChange, value, onSearchClick }) => {
	return (
		<SearchBarContainer>
			<Input
				placeholderText={searchPlaceholderText}
				onChange={onSearchChange}
				value={value}
				name={searchText}
			/>
			<Button text={searchText} handleClick={() => onSearchClick()} />
		</SearchBarContainer>
	);
};
