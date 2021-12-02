import React, { useState } from 'react';

import { Button } from '@mui/material';

function LogoutButton() {
	const [user, setUser] = useState({ name: '', email: '' });

	const Logout = () => {
		localStorage.clear();
		window.location.href = '/';
	};

	return <Button onClick={Logout}>Logout</Button>;
}

export default LogoutButton;
