import React from 'react';

import { Alert, Button, Snackbar, Stack } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

function DashboardSnackbar() {
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	const Alert = React.forwardRef(function Alert(props, ref) {
		return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
	});

	return (
		<div>
			<Stack spacing={2} sx={{ width: '100%' }}>
				<Button variant='outlined' onClick={handleClick}>
					Submit
				</Button>
				<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
					<Alert
						onClose={handleClose}
						severity='success'
						sx={{ width: '100%' }}
					>
						2 calls got uploaded successfully
					</Alert>
				</Snackbar>
			</Stack>
		</div>
	);
}

export default DashboardSnackbar;
