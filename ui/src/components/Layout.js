import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
// import MainSection from './mainSection';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Section = styled.div`
	display: flex;
	/* position:fixed; */
	top: 0;
	left: 0;
	flex-direction: column;
	/* height: 100%; */

	@media all and (max-width: 414px) {
		/* align-items: center; */
	}
`;

const Menu = styled.div`
	display: none;
	background-color: #4ea9ad;

	@media all and (max-width: 414px) {
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		padding-left: 8px;
		height: 2rem;
		color: white;
		width: 100%;
		order: 0;
		align-items: center;
		font-size: 20px;

		a {
			text-decoration: none;
		}
	}
`;

class Layout extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			sidebarOpen: true
		};
	}
	toggleMenu = () => {
		this.setState((prevState) => {
			return { sidebarOpen: !prevState.sidebarOpen };
		});
	};
	render() {
		let sidebar;
		if (this.state.sidebarOpen) {
			sidebar = <Sidebar />;
		}
		return (
			<Section className={this.props.className}>
				<Menu onClick={this.toggleMenu}> &#9776; Menu</Menu>
				<Head>
					<title>dhmbooks</title>
				</Head>
				{this.props.children}
				{sidebar}
				<Footer />
			</Section>
		);
	}
}
export default Layout;
