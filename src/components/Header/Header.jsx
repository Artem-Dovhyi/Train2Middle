import React from 'react';

import { Button } from '../../common';
import { Logo } from './components';

import { LOGIN_TEXT } from '../../constants';

import { HeaderContainer, LogoContainer, RightBlock } from './Header.styled';

export const Header = () => {
	return (
		<HeaderContainer>
			<LogoContainer>
				<Logo />
			</LogoContainer>
			<RightBlock>
				<h3>Artem</h3>
				<Button handleClick={() => {}} text={LOGIN_TEXT} />
			</RightBlock>
		</HeaderContainer>
	);
};
