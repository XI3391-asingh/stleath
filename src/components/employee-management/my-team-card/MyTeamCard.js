import React from 'react';

import { Avatar, Card, Stack, Typography } from '@mui/material';
import TeamData from '../../../data/team.json';

import './styles.css';

function stringToColor(string) {
	let hash = 0;
	let i;

	/* eslint-disable no-bitwise */
	for (i = 0; i < string.length; i += 1) {
		hash = string.charCodeAt(i) + ((hash << 5) - hash);
	}

	let color = '#';

	for (i = 0; i < 3; i += 1) {
		const value = (hash >> (i * 8)) & 0xff;
		color += `00${value.toString(16)}`.substr(-2);
	}
	/* eslint-enable no-bitwise */

	return color;
}

function stringAvatar(name) {
	return {
		sx: {
			bgcolor: stringToColor(name),
		},
		children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
	};
}

function MyTeamCard() {
	return (
		// <div>
		<Card className='my-team-card-layout'>
			<div>
				<div>
					<Typography variant='h6' className='my-team-card-heading'>
						My Team
					</Typography>
				</div>
				<div>
					<Stack
						direction='row'
						spacing={2}
						className='my-team-card-avatar-container'
					>
						{TeamData.map((team, index) => {
							return (
								<div>
									<Avatar
										{...stringAvatar(team.avatar)}
										className='my-team-card-avatar'
									/>
									<Typography variant='caption' className='my-team-card-name'>
										{team.name}
									</Typography>
								</div>
							);
						})}
					</Stack>
				</div>
			</div>
		</Card>
		// </div>
	);
}

export default MyTeamCard;
