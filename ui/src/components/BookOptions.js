import React from 'react';
import Link from 'next/link';
import Button from './Button';
import GoPlus from 'react-icons/lib/go/plus';
import FaTrashO from 'react-icons/lib/fa/trash-o';
import GoPencil from 'react-icons/lib/go/pencil';
import Styledsection from './Styledsection';

const Books = (props) => {
	return (
		<Styledsection marginLeft="200px">
			<Link href="/books/addbooks">
				<Button bgColour="#216F73" color="white">
					<GoPlus />Add Title
				</Button>
			</Link>
			<Link href="/books/editbook">
				<Button bgColour="rgba(0, 217, 255, 0.735)" color="white">
					<GoPencil />Edit Title
				</Button>
			</Link>
			<Button bgColour="Red" color="white">
				<FaTrashO />Delete Title
			</Button>
		</Styledsection>
		// {props.children}
	);
};
export default Books;
