import React from 'react';
import Button from './Button';
import Link from 'next/link';
import GoPlus from 'react-icons/lib/go/plus';
import GoPencil from 'react-icons/lib/go/pencil';
import Styledsection from './Styledsection';

const TransactionsMenu = () => {
	return (
		<Styledsection marginLeft='200px'>
			<Link href="/transaction">
				<Button bgColour="#216F73" color="white">
					<GoPlus />Inbound
				</Button>
			</Link>
			<Link href="/outboundtransaction">
				<Button bgColour="rgba(0, 217, 255, 0.735)" color="white">
					<GoPencil />Outbound
				</Button>
			</Link>
		</Styledsection>
	);
};
export default TransactionsMenu;
