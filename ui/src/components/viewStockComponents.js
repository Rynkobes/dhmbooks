import styled from 'styled-components';

const TopSection = styled.div`
	display: flex;
	align-items: center;
	margin-left: 30px;
	margin-right: 50px;
	height: 34px;
	margin-bottom: 0;
	width: 100%;
`;

const Table = styled.table`
	margin-top: 1.1cm;
	padding-left: -20px;
	width: 100%;
	padding-bottom: 30px;
	text-align: left;

	@media all and (max-width: 414px) {
		margin-top: 2cm;
	}

	tr {
		font-family: 'Helvetica';
		font-weight: normal;
		font-size: 15px;
		color: #051c1d;

		@media all and (max-width: 414px) {
			font-size: 13px;
		}
	}

	tr:nth-of-type(even) {
		background: rgba(233, 239, 244, 0.543);
	}

	th {
		color: #083234;
		font-size: 17px;

		@media all and (max-width: 414px) {
			font-size: 14px;
		}
	}
`;

const Wrapper = styled.div`
	margin-left: ${(props) => props.marginLeft};

	@media all and (max-width: 414px) {
		margin: 0;
		left: 0;
	}
`;

export { TopSection, Wrapper, Table };
