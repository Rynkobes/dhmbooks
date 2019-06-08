import styled from 'styled-components';

const Styledsection = styled.section`
	display: flex;
	margin-left: ${(props) => props.marginLeft};
	width: 100%;
	padding-top: 5px;
	/* left: 0; */
	top: 0;
	position: fixed;
	padding-bottom: 5px;
	background-color: ${(props) => (props.bgcolor ? props.bgcolor : 'black')};

	@media all and (max-width: 414px) {
		margin-top: 31px;
		margin-left: 0;
		/* heignt: 2rem; */
	}
`;

export default Styledsection;
