import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './menu.css';
//import ButtonLink from '../ButtonLink';
import Button from '../Button';
import ButtonLink from '../ButtonLink';

function Menu(){
    return(
        <nav className='Menu'>
          <Link to="/">
              <img className="Logo" src ={Logo} alt="ValdireneFlix logo"/>
          </Link>
          <Button as={Link} className="ButtonLink" to="/cadastro/video">Novo Vídeo</Button>
        </nav>
    )
}

export default Menu;