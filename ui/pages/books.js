// import React from 'react';
import Layout from '../src/components/Layout';
import MainSection from './MainSection';
import BookOptions from '../src/components/BookOptions';

const MyBooks = () => (
	<MainSection>
		<Layout />
		<BookOptions />
	</MainSection>
);

export default MyBooks;

// const GraphBookstab = graphql(query)(Bookstab);
// export default (graphql(query)(Bookstab));
