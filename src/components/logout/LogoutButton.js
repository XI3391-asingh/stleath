import React, { useState } from 'react';

import './styles.css';

function LogoutButton() {
	const [user, setUser] = useState({ name: '', email: '' });

	const Logout = () => {
		localStorage.clear();
		window.location.href = '/';
	};

	return (
		<button className='logout-button-layout' onClick={Logout}>
			Logout
		</button>
	);
}

export default LogoutButton;
