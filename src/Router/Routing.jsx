import React from 'react';
import Login from '../components/auth/Login';
import Logout from '../components/auth/Logout';
import Register from '../components/auth/Register';
import Encuesta from '../components/encuestas/Encuesta'
import Seccion from '../components/encuestas/Seccion'
import Pregunta from '../components/encuestas/Pregunta'
import Opcion from '../components/encuestas/Opcion'
import Home from '../components/Home';
import {Switch, Route} from 'react-router-dom';

function Routing(){

    return (
		<>
			<Switch>
				<Route path="/encuestasVanessa/" exact component={Home} />
				<Route path="/encuestasVanessa/encuesta" exact component={Encuesta} />
				<Route path="/encuestasVanessa/encuesta/seccion/:id" exact component={Seccion} />
				<Route path="/encuestasVanessa/encuesta/seccion/preguntas/:id" exact component={Pregunta} />
				<Route path="/encuestasVanessa/encuesta/seccion/preguntas/opciones/:id" exact component={Opcion} />
				<Route path="/encuestasVanessa/login" component={Login} />
				<Route path="/encuestasVanessa/logout" component={Logout} />
				<Route path="/encuestasVanessa/register" component={Register} />
			</Switch>
		</>
    )
}

export default Routing;