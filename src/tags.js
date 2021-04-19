import React, { useState, useEffect } from 'react';
import {Modal, OverlayTrigger, Button} from 'react-bootstrap/';

function Tags () {
const [tag , setTag]= useState([]);
const [show, setShow] = useState(false);
const [inputValue, setInputValue] = useState('');

const handleClose = () => {
  setTag([...tag, inputValue]);
  setShow(false)};

const handleShow = () => setShow(true);


const onKey=(event)=>{
 setInputValue(event.target.value);

}

 
  
return(
  <div style={{margin:'2%'}}>
  <Button variant="success" onClick={handleShow}>Añadir Tag</Button>
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ingresar nueva Tag</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input type="text" onChange={onKey} style={{width:'100%'}}></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Enviar
          </Button>
        </Modal.Footer>
</Modal>
<div style={{display: 'flex'}}>
{tag.map(item=>(
<div style={{border:'1px solid black' , background: 'lightgrey', margin:'1%', padding:'5px', height:'auto'}}>
<p>{item}</p>
</div>
  ))}
</div>
  </div>
)

}

export default Tags;