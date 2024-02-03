import styled from "@emotion/styled";
import bg from './assets/bg.png';
import donation_total_bg from './assets/donation_total_bg.png';
import { bgAni, flagMove, flagWave } from './keyframes';
import flag_01 from './assets/flag_01.png';
import './font.css';

export const Container = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	padding: 0;
	margin: 0;
	overflow: hidden;
`;

export const TotalEl = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  padding-right: 10px;
  background-image: url(${donation_total_bg});
	background-size: 100% 100%;
  width: 300px;
  height: 80px;
	
  font-family: 'BusterTotal';
	font-size: 58px;
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

/* Controls the right to left movement of the flags */
export const FlagBox = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 150%;
	height: 95px;
	background-color: transparent;
	animation: ${flagMove} 1.471s linear infinite;
`;

/* Controls the waving animation of the flags */
export const Flag = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-size: 506px 95px;
	background-image: url(${flag_01});
	animation: ${flagWave} 0.6s linear infinite;
`;