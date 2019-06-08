import React from 'react';
import Button from './Button';
import GoPlus from 'react-icons/lib/go/plus';
import FaTrashO from 'react-icons/lib/fa/trash-o';
import GoPencil from 'react-icons/lib/go/pencil';
import Styledsection from './Styledsection';

const WarehouseMenu = () => {
	return (
		<Styledsection marginLeft='200px'>
			<Button bgColour="#216F73" color="white">
				<GoPlus />Add Warehouse
			</Button>
			<Button bgColour="rgba(0, 217, 255, 0.735)" color="white">
				<GoPencil />Edit Warehouse
			</Button>
			<Button bgColour="Red" color="white">
				<FaTrashO />Delete Warehouse
			</Button>
		</Styledsection>
	);
};
export default WarehouseMenu;
