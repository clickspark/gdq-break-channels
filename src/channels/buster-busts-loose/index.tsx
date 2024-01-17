import type { FormattedDonation, Total } from '@gdq/types/tracker';
import { ChannelProps, registerChannel } from '../channels';

import { useListenFor, useReplicant } from 'use-nodecg';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import TweenNumber from '@gdq/lib/components/TweenNumber';

import bg from './resources/bg.png';

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
			<TotalEl>
				$<TweenNumber value={Math.floor(total?.raw ?? 0)} />
			</TotalEl>
            <Background1/>
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
	color: white;

	position: absolute;

	right: 0%;
	top: 10%;
	transform: translate(-50%, -50%);
`;

const bgAni = keyframes`
	from { background-position: 0 0; }
	to { background-position: -384px 0; }
`;

const Background1 = styled.div`
	position: absolute;
	bottom: 0px;
	left: 0;
	width: 100%;
	height: 32px;
	image-rendering: pixelated;
	background-image: url(${bg});
	background-size: 384px 32px;
	animation: ${bgAni} 1s linear infinite;
`;