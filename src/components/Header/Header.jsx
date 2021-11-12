import React from 'react';
import { Button } from '../../common';
import { loginText } from '../../constants';

import { Logo } from './components/Logo';
import { HeaderContainer, LogoContainer, RightBlock } from './Header.styled';

export const Header = () => {
	return (
		<HeaderContainer>
			<LogoContainer>
				<Logo />
			</LogoContainer>
			<RightBlock>
				<h3>Artem</h3>
				<Button handleClick={() => {}} text={loginText} />
			</RightBlock>
		</HeaderContainer>
	);
};
