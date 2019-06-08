import styled from 'styled-components';

const Wrapper = styled.section`
	height: 100%;
	margin-top: 1cm;
	position: fixed;
	margin-left: 20%;

	form {
		padding: 10px 30px 10px 30px;
		border: 2px solid rgba(16, 114, 131, 0.687);
	}

	h3 {
		text-align: center;
	}

	.top {
		display: flex;
		/* border: 2px solid red; */
		justify-content: space-between;
	}
`;

const OtherWrapper = styled.div`
	padding-left: ${(props) => props.pLeft};
	margin: 0;
	display: flex;
	/* justify-content:space-evenly; */
	/* border: 2px solid rgba(16, 114, 131, 0.687); */
`;

const Section = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin-bottom: 9px;
`;

const Select = styled.select`
	color: rgba(43, 40, 40, 0.632);
	font-size: 16px;
	background-color: white;
	width: 5cm;
	margin: ${(props) => props.margin};

	@media all and (max-width: 414px) {
		border: 2px solid blue;
		width: 3cm;
		font-size: 13px;
		margin: 0;
	}
`;

const Input = styled.input`
	height: 20px;
	width: 5cm;
	margin-top: ${(props) => props.mtop};
	margin-left: ${(props) => props.left};
	margin-right: ${(props) => props.pright};
`;

const Button = styled.button`
	font-size: 20px;
	background-blend-mode: color;
	margin-top: 20px;
	margin-right: ${(props) => props.marginr};
	margin-bottom: 20px;
`;

const Label = styled.label`
	color: rgba(43, 40, 40, 0.632);
	/* border: 2px solid yellow; */
	text-align: ${(props) => props.align};
	font-size: 18px;
	width: 5cm;
	margin-right: ${(props) => (props.right ? props.right : '1cm')};

	@media all and (max-width: 414px) {
		border: 2px solid brown;
		display: ${(props) => (props.display ? props.display : 'none')};
	}
`;

export { Wrapper, Section, Select, Input, Button, Label, OtherWrapper };
