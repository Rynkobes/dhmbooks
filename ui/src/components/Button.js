import styled from 'styled-components';

const Button = styled.button`
	display: flex;
	background-color: ${(props) => props.bgColour};
	font-family: 'Cochin';
	color: ${(props) => props.color};
	font-size: 18px;
	border-radius: 20px;
	margin-left: 1%;

	@media all and (max-width:414px){
		font-size: 18px;
	}
`;

export default Button;
