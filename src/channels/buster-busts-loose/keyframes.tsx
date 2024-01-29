import { keyframes } from "@emotion/react";

export const bgAni = keyframes`
	from { background-position: 0 0; }
	to { background-position: -759px 0; }
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