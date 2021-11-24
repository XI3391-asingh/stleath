import { Button } from '@mui/material';
import React, { useState } from 'react';

function LogoutButton() {
	const [user, setUser] = useState({ name: '', email: '' });

	const Logout = () => {
		localStorage.clear();
		window.location.href = '/login';
	};

	return <Button onClick={Logout}>Logout</Button>;
}

export default LogoutButton;
