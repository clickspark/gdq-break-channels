import type { FormattedDonation, Total } from '@gdq/types/tracker';
import { ChannelProps, registerChannel } from '../channels';
import { useState } from 'react';

import { useListenFor, useReplicant } from 'use-nodecg';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import TweenNumber from '@gdq/lib/components/TweenNumber';

import bgfinal2 from './resources/bgfinal2.png';
import busterrun from './resources/buster_run.png';
import busterjump from './resources/buster_jump.png';

interface BusterProps {
	bottom: number;
	width: number;
	height: number;
	bg: string;
	ani: string;
	duration: number;
	steps: number;
	iteration: string;
}

registerChannel('Buster Busts Loose', 106, BusterBustsLoose, {
	position: 'bottomLeft',
	site: 'GitHub',
	handle: 'clickspark',
});

function BusterBustsLoose(props: ChannelProps) {
	

	const buster_running = keyframes`
		from { background-position: 0px }
		to { background-position: -768px }
	`

	const buster_jumping = keyframes`
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
			transform: translateY(0px); 
		}
	`

	const [total] = useReplicant<Total | null>('total', null);
	const [busterState, setBusterState] = useState({ 
    bg: busterrun, 
    ani: buster_running,
		bottom: 47,
    width: 96, 
    height: 64, 
    duration: 0.26, 
    steps: 8, 
    iteration: 'infinite'
	});

	const Buster = styled.div<BusterProps>`
    position: absolute;
    bottom: ${props => props.bottom}px;
    left: 300px;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    background: url(${props => props.bg});
    animation: ${props => props.ani} ${props => props.duration}s steps(${props => props.steps}) ${props => props.iteration};
`;

	

	useListenFor('donation', (donation: FormattedDonation) => {
		/**
		 * Respond to a donation.
		 */

		// short jump
			shortJump();			
	});


	const shortJump = () => {
    setBusterState(prevState => ({
        ...prevState,
        bg: busterjump,
        ani: buster_jumping,
        width: 96,
        height: 96,
        duration: 0.42,
        iteration: '1'
    }));

    setTimeout(() => {
			setBusterState({ bg: busterrun, ani: buster_running, bottom: 47, width: 96, height: 64, duration: 0.26, steps: 8, iteration: 'infinite' })
		}, 420);
	};

	

	return (
		<Container>
      <Background1/>
			<Buster {...busterState}/>
			<TotalEl>
				$<TweenNumber value={Math.floor(total?.raw ?? 0)} />
			</TotalEl>
		</Container>
	);
}

const Container = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	padding: 0;
	margin: 0;
`;

const TotalEl = styled.div`
	font-family: gdqpixel;
	font-size: 46px;
	color: black;

	position: absolute;

	right: 0%;
	top: 15%;
	transform: translate(-50%, -50%);
`;

const bgAni = keyframes`
	from { background-position: 0 0; }
	to { background-position: -759px 0; }
`;

const Background1 = styled.div`
	position: absolute;
	bottom: 0px;
	left: 0;
	width: 100%;
	height: 332px;
	image-rendering: pixelated;
	background-image: url(${bgfinal2});
	background-size: 759px 332px;
	animation: ${bgAni} 2.2s linear infinite;
`;