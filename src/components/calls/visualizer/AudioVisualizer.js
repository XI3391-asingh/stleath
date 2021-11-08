import React, { useState } from 'react';

import ReactWaves from '@dschoon/react-waves';

function AudioVisualizer() {
	const [play, setPlay] = useState('false');
	return (
		<div>
			<div
				className='play button'
				onClick={() => {
					this.setPlay({ playing: 'true' });
				}}
			>
				{!this.play ? '▶' : '■'}
			</div>
			<ReactWaves
				audioFile={'africa'}
				className={'react-waves'}
				options={{
					barHeight: 2,
					cursorWidth: 0,
					height: 200,
					hideScrollbar: true,
					progressColor: '#EC407A',
					responsive: true,
					waveColor: '#D1D6DA',
				}}
				volume={1}
				zoom={1}
				playing={this.play}
			/>
		</div>
	);
}

export default AudioVisualizer;
