import React from 'react';
import '../.././App.css';
import { Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from '../../logo777.png';
function NavBar(){
    return (
	<>

		<Navbar className="navegacion">
		<Container>
		
		<Link to='/encuestasVanessa/'>
			<img src={logo} width='50px'/>
			<Navbar.Brand href="/encuestasVanessa/">EnQestas</Navbar.Brand>
		</Link>

		<Nav className="mx-auto">

		<Link to='/encuestasVanessa/encuesta'>
			<Nav.Link href="#Encuesta">Quiz</Nav.Link>
		</Link>

		<Link to='/encuestasVanessa/register'>
			<Nav.Link href="#Register">Register</Nav.Link>
		</Link>

		<Link to='/encuestasVanessa/login'>
			<Nav.Link href="#Login">Login</Nav.Link>
		</Link>

		<Link to='/encuestasVanessa/logout'>
			<Nav.Link href="#Logout">Logout</Nav.Link>
		</Link>

		</Nav>
		</Container>
		</Navbar>
	</>
    )
}

export default NavBar;