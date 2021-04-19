
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './images/logo.png';
import {Image, Container, Button, NavLink} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>


function Header(props) {
 
   
    const [elementId, setElementId] = useState();
    const [show, setShow] = useState(true);
  

    const showDropdown = (event)=>{
      setElementId(parseInt(event.target.id));
      setShow(true);
      
    }

    const hideDropdown =()=>{
      setShow(false);
    }


    return (
      <div>
        
        <Nav variant="pills" className="row justify-content-center"  activeKey="1">
        <Nav.Item>
        <Container >
  
      <Image src={Logo} fluid width="100"/>
    
</Container>
        </Nav.Item>

        {props.menu.map((cont, item) =>
      {if (cont.secondLevel==null) 
      {return  <Nav.Item>
        <Nav.Link eventKey={item} href={cont.firstLevel.enlace}>
         {cont.firstLevel.menu}
        </Nav.Link>
      </Nav.Item>;}
      return (
      <NavDropdown title={cont.firstLevel} id={item} show={(elementId===item)&&(show)} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
        {cont.secondLevel.map((subcont, itemSub) =>
        <NavDropdown.Item href={subcont.enlace} alt={subcont.subMenu} target={subcont.target} id={`${item}.${itemSub}`}>{subcont.subMenu}</NavDropdown.Item>
        )}
        </NavDropdown>
      )
      
      
      }
 )}
  <Button href="#">Iniciar Sesion</Button>
</Nav>
      </div>
      );
}

export default Header;