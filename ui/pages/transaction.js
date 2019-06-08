import React from 'react';
import MainSection from './MainSection';
import Layout from '../src/components/Layout';
import withData from '../apollo/withData';
import TransactionsMenu from '../src/components/TransactionsMenu';
import WarehouseInbound from '../src/components/warehouseInbound';

export default withData(() => {
	return (
		<MainSection>
			<Layout />
			<TransactionsMenu />
			<WarehouseInbound />
		</MainSection>
	);
});
