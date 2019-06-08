import React from 'react';
import Books from '../books';
import withData from '../../apollo/withData';
import EditTitle from '../../src/components/EditTitle';

export default withData(() => (
	<div>
		<Books />
		<EditTitle />
	</div>
));
