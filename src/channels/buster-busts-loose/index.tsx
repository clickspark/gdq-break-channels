import type { FormattedDonation, Total } from '@gdq/types/tracker';
import { ChannelProps, registerChannel } from '../channels';

import { useListenFor, useReplicant } from 'use-nodecg';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import TweenNumber from '@gdq/lib/components/TweenNumber';

import bgfinal2 from './resources/bgfinal2.png';
import busterrun from './resources/buster_run.png';

registerChannel('Buster Busts Loose', 106, BusterBustsLoose, {
	position: 'bottomLeft',
	site: 'GitHub',
	handle: 'clickspark',
});

function BusterBustsLoose(props: ChannelProps) {
	const [total] = useReplicant<Total | null>('total', null);

	useListenFor('donation', (donation: FormattedDonation) => {
		/**
		 * Respond to a donation.
		 */
		
	});

	return (
		<Container>
      <Background1/>
			<BusterRun/>
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

const buster_running = keyframes`
	from { background-position: 0px }
	to { background-position: -768px }
`

const buster_test = keyframes`
	from { background-position: 0px }
	to { background-position: -384px }
`

const BusterRun = styled.div`
	position: absolute;
	bottom: 47px;
	left: 300px;
	width: 96px;
	height: 64px;
	background: url(${busterrun});
	animation: ${buster_running} 0.26s steps(8) infinite;
	`