import type { FormattedDonation, Total } from '@gdq/types/tracker';
import { ChannelProps, registerChannel } from '../channels';
import React, { useEffect, useState } from 'react';

import { useListenFor, useReplicant } from 'use-nodecg';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import TweenNumber from '@gdq/lib/components/TweenNumber';

import bgfinal2 from './resources/bgfinal2.png';
import busterrun from './resources/buster_run.png';
import busterjump from './resources/buster_jump.png';

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
		from { background-position: 0px }
		to { background-position: -288px }
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

	const Buster = styled.div`
		position: absolute;
		bottom: ${busterState.bottom}px;
		left: 300px;
		width: ${busterState.width}px;
		height: ${busterState.height}px;
		background: url(${busterState.bg});
		animation: ${busterState.ani} ${busterState.duration}s steps(${busterState.steps}) ${busterState.iteration};
	`

	

	useListenFor('donation', (donation: FormattedDonation) => {
		/**
		 * Respond to a donation.
		 */

		// short jump
		shortJump();
	});

	useEffect(() => {
    const timer = setTimeout(() => {
        setBusterState(prevState => ({ 
            ...prevState, 
            bottom: 100, 
            transition: 'bottom 5s ease-in-out' 
        }));
    }, 1000);
    return () => clearTimeout(timer);
}, []);

	const shortJump = () => {
		setBusterState({ bg: busterjump, ani: buster_jumping, bottom: 112, width: 96, height: 96, duration: 1, steps: 3, iteration: '1' });
		setTimeout(() => setBusterState({ bg: busterrun, ani: buster_running, bottom: 47, width: 96, height: 64, duration: 0.26, steps: 8, iteration: 'infinite' }), 1000);
	};

	

	return (
		<Container>
      <Background1/>
			<Buster/>
			<TotalEl>
				$<TweenNumber value={Math.floor(total?.raw ?? 0)} />
			</TotalEl>
		</Container>
	);
}

function shortJump(props: ChannelProps) {
	
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