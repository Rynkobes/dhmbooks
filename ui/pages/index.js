import React from 'react';
import withData from '../apollo/withData';
import MainSection from './MainSection';
import Layout from '../src/components/Layout';
import DisplayStock from '../src/components/DisplayStock';

export default withData(() => (
	<MainSection>
		<DisplayStock />
		<Layout />
	</MainSection>
));
