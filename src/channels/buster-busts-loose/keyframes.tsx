import { keyframes } from "@emotion/react";
import flag_01 from './assets/flag_01.png';
import flag_02 from './assets/flag_02.png';
import flag_03 from './assets/flag_03.png';

export const bgAni = keyframes`
	from { background-position: 0 0; }
	to { background-position: -759px 0; }
`;

/* Controls the right to left movement of the flags */
export const flagMove = keyframes`
	from { transform: translateX(0); }
	to { transform: translateX(-506px); }
`;

/* Controls the waving animation of the flags */
export const flagWave = keyframes`
	0% {
		background-image: url(${flag_01});
	}

	33.3% {
		background-image: url(${flag_02});
	}

	66.6% {
		background-image: url(${flag_03});
	}

	100% {
		background-image: url(${flag_01});
	}
`;

export const buster_running = keyframes`
		from { background-position: 0px }
		to { background-position: -768px }
	`

export const buster_jumping = keyframes`
		0% { 
			background-position: 0px;
			transform: translateY(0px); 
		}

		4.34% {
			background-position: 0px; 
		}

		4.35% {
			background-position: -96px;
			transform: translateY(-21px); 
		}

		8.7% {
			transform: translateY(-30px);
		}

		21.75% {
			transform: translateY(-48px);
		}

		43.5% {
			transform: translateY(-63px);
		}

		52.2% {
			transform: translateY(-63px);
		}

		56.54% {
			background-position: -96px;
		}

		56.55% {
			background-position: -192px;
			transform: translateY(-60px);
		}

		78.3% {
			transform: translateY(-45px);
		}

		91.35% {
			transform: translateY(-27px);
		}

		95.7% {
			transform: translateY(-18px);
		}
		
		100% { 
			background-position: -192px;
			transform: translateY(6px); 
		}
	`