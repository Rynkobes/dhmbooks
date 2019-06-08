import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	left: 0;
	font-size: 14px;
	height: 2rem;
	color: aliceblue;
	background-color: black;
	order: 3;
	bottom: 0;
	width: 100%;
	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

	@media all and (max-width: 414px) {
		font-size: 12px;
		height: 1.8rem;
		order: 1;
	}
`;

const Footer = () => {
	return <FooterSection>UD-HTMO Software 2019. All Rights Reserved</FooterSection>;
};

export default Footer;
