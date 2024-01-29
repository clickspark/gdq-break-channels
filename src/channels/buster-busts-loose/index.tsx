import type { FormattedDonation, Total } from '@gdq/types/tracker';
import { ChannelProps, registerChannel } from '../channels';
import { useState } from 'react';

import { useListenFor, useReplicant } from 'use-nodecg';
import styled from '@emotion/styled';
import TweenNumber from '@gdq/lib/components/TweenNumber';

import busterrun from './resources/buster_run.png';
import busterjump from './resources/buster_jump.png';
import {buster_running, buster_jumping } from './keyframes';
import { Container, TotalEl, Background1 } from './styles';

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