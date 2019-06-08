import React from 'react';
import MainSection from './MainSection';
import Layout from '../src/components/Layout';
import withData from '../apollo/withData';
import WarehouseMenu from '../src/components/warehouseMenu';

export default withData(() => (
	<MainSection>
		<Layout />
		<WarehouseMenu />
	</MainSection>
));
