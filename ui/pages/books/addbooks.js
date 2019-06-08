// import React from 'react';
import Books from '../books';
import withData from '../../apollo/withData';
import AddTitle from '../../src/components/AddTitle';

export default withData(() => (
	<div>
		<Books />
		<AddTitle />
	</div>
));
