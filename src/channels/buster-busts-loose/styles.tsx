import styled from "@emotion/styled";
import bg from './assets/bg.png';
import { bgAni } from './keyframes';

export const Container = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	padding: 0;
	margin: 0;
`;

export const TotalEl = styled.div`
	font-family: gdqpixel;
	font-size: 46px;
	color: black;
	position: absolute;
	right: 0%;
	top: 15%;
	transform: translate(-50%, -50%);
`;

export const Background1 = styled.div`
	position: absolute;
	bottom: 0px;
	left: 0;
	width: 100%;
	height: 332px;
	image-rendering: pixelated;
	background-image: url(${bg});
	background-size: 759px 332px;
	animation: ${bgAni} 2.2s linear infinite;
`;