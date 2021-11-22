import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { Redirect } from 'react-router'

import '../.././App.css';

const LogOut = () => {

	let history=useHistory();

	useEffect(() => {
		const loggedInUser = localStorage.getItem("usuario");
		if (loggedInUser) {
			localStorage.clear();
			history.push('/encuestasVanessa/');
			//<Redirect to="/encuestasVanessa/"/>
		}
	});

    return (
		<>
		</>
    );
};

export default LogOut;