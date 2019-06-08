import React, { Component } from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Books from './components/BookOptions';

const Section = styled.section`
	min-height: 100vh;
	overflow: hidden;
	display: block;
	position: relative;
`;

class App extends Component {
	render() {
		return (
			<Section>
				// <Sidebar />
				// <Books />
				// <Footer />
			</Section>
		);
	}
}

export default App;
