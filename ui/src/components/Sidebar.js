import Link from 'next/link';
import FaDashboard from 'react-icons/lib/fa/dashboard';
import FaHome from 'react-icons/lib/fa/home';
import FaBook from 'react-icons/lib/fa/book';
import FaCogs from 'react-icons/lib/fa/cogs';
import FaModx from 'react-icons/lib/fa/modx';
import styled from 'styled-components';

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	padding-top: 4%;
	width: 200px;
	background: linear-gradient(rgba(0, 0, 0, 0.707), rgba(0, 0, 0, 0.707)), url('../../static/sidebar.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	/* border: 2px solid gold; */

	a {
		text-decoration: none;
	}

	@media all and (max-width: 414px) {
		margin-top: 75px;
		width: 150px;
		order: 1;
		height: 300px;
		display: flex;
	}
`;

const MenuOptions = styled.h1`
	display: flex;
	/* flex: 1; */
	margin: 0;
	padding-left: 15%;
	Padding-bottom: 10%;
	Padding-top: 10%;
	font-family: 'Cochin';
	font-weight: lighter;
	font-size: 20px;
	color: white;

	&:hover {
		background: rgba(18, 182, 219, 0.344);
	}

	${(props) => props.className};

	@media all and (max-width: 414px) {
		font-size: 16px;
		/* order: 2; */
	}
`;

const Sidebar = (props) => {
	return (
		<Wrapper>
			<a href="/">
				<MenuOptions>
					<FaDashboard /> Dashboard
				</MenuOptions>
			</a>

			<Link href="/books">
				<a>
					<MenuOptions>
						<FaBook />Books
					</MenuOptions>
				</a>
			</Link>
			<Link href="/warehouse">
				<a>
					<MenuOptions>
						<FaHome />Warehouse
					</MenuOptions>
				</a>
			</Link>
			<Link href="/transaction">
				<a>
					<MenuOptions>
						<FaModx />Transactions
					</MenuOptions>
				</a>
			</Link>
			<Link href="/config">
				<a>
					<MenuOptions>
						<FaCogs /> Config
					</MenuOptions>
				</a>
			</Link>
		</Wrapper>
	);
};
export default Sidebar;
