import React, { useState } from 'react';
import { CgMenuRight } from 'react-icons/cg';
import { FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
} from './NavbarStyles';
import { navbarData } from '../../Data/NavbarData';

const Navbar = () => {
	const [show, setShow] = useState(false);

	const scrollTo = (id) => {
		const element = document.getElementById(id);
		element.scrollIntoView({
			behavior: 'smooth',
		});
	};

	const closeMobileMenu = (id) => {
		scrollTo(id);

		setShow(false);
	};

	return (
		<IconContext.Provider value={{ color: '#fff' }}>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">
						<NavIcon src="https://raw.githubusercontent.com/Mostafa-ElHawary/Designify-/08af7c6daddde8b050a62d52c729e2f418fe3a01/public/images/logo.svg" alt="" />
						esignify
					</NavLogo>
					<MobileIcon onClick={() => setShow(!show)}>
						{show ? <FaTimes /> : <CgMenuRight />}
					</MobileIcon>
					<NavMenu show={show}>
						{navbarData.map((el, index) => (
							<NavItem key={index}>
								<NavLinks to="/" onClick={() => closeMobileMenu(el.to)}>
									{el.text}
								</NavLinks>
							</NavItem>
						))}
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
	);
};

export default Navbar;