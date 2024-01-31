import styled from "@emotion/styled";
import bg from './assets/bg.png';
import { bgAni } from './keyframes';
import './font.css';

export const Container = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	padding: 0;
	margin: 0;
`;

export const TotalEl = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  padding-right: 10px;
  background-color: rgba(20, 20, 20, 0.7);
  width: 340px;
  height: 80px;
	
  font-family: 'BusterTotal';
	font-size: 60px;
  color: #ffffff;
  -webkit-text-stroke: 2px #00deff;
  text-shadow: 3px 3px 0px #0039d6;
	
  position: absolute;
	right: 1%;
	top: 2%;
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