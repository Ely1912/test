import {Card, CardGroup} from 'react-bootstrap/';
import './destacadosComponent.css';


<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>



function DestacadosComponent(props) {

  return(
    <CardGroup className="parentDiv">
      <CardGroup className="childDiv">

    <div className="col-sm-4">
    
      <Card.Img variant="top" src={props.cardDestacados[0].urlDestacados} className="image" />
     
    <Card.ImgOverlay>
    <Card.Title className="text">< a href={props.cardDestacados[0].linkDestacados} target="_blank">{props.cardDestacados[0].titleDestacados} </a></Card.Title>
    <Card.Text className="text">
      {props.cardDestacados[0].descriptionDestacados}
    </Card.Text>
  </Card.ImgOverlay></div>

  <div className="col-sm-4">
      <Card.Img variant="top" src={props.cardDestacados[1].urlDestacados} className="image"/>
    <Card.ImgOverlay>
    <Card.Title className="text"><a href={props.cardDestacados[0].linkDestacados} target="_blank">{props.cardDestacados[1].titleDestacados}</a></Card.Title>
    <Card.Text className="text">
      {props.cardDestacados[1].descriptionDestacados}
    </Card.Text>
  </Card.ImgOverlay></div>

  <div className="col-sm-4">
      <Card.Img variant="top" src={props.cardDestacados[2].urlDestacados} className="image"/>
    <Card.ImgOverlay>
    <Card.Title className="text"><a href={props.cardDestacados[0].linkDestacados} target="_blank">{props.cardDestacados[2].titleDestacados}</a></Card.Title>
    <Card.Text className="text">
      {props.cardDestacados[2].descriptionDestacados}
    </Card.Text>
  </Card.ImgOverlay></div>

  </CardGroup>
    <CardGroup className="childDiv">

    <div className="col-sm-8">
      <Card.Img variant="top" src={props.cardDestacados[3].urlDestacados} className="image"/>
    <Card.ImgOverlay>
    <Card.Title className="text"><a href={props.cardDestacados[0].linkDestacados} target="_blank">{props.cardDestacados[3].titleDestacados}</a></Card.Title>
    <Card.Text className="text">
      {props.cardDestacados[3].descriptionDestacados}
    </Card.Text>
  </Card.ImgOverlay></div>

  <div className={"col-sm-4"}>
      <Card.Img variant="top" src={props.cardDestacados[4].urlDestacados} className="image"/>
    <Card.ImgOverlay>
    <Card.Title className="text" style={{color:'white'}} ><a href={props.cardDestacados[0].linkDestacados} target="_blank">{props.cardDestacados[4].titleDestacados}</a></Card.Title>
    <Card.Text className="text">
      {props.cardDestacados[4].descriptionDestacados}
    </Card.Text>
  </Card.ImgOverlay></div>
 
  </CardGroup>
  </CardGroup>
  )}

  export default DestacadosComponent;