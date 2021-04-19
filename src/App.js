
import './App.css';
import Header from "./header_component.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Try from "./try.json";
import Carrusel from "./infoCarrusel.json";
import Destacados from "./infoDestacados.json";
import CarruselComponent from "./carruselComponent.js";
import DestacadosComponent from "./destacadosComponent.js";
import Post from "./post.js";
import Tags from "./tags.js";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>
/*
const firstnav = [];
const secondnav = [];
 Object.keys(Try.try).map((item, i) => (
  <li key={i}>
    {firstnav[i]= Try.try[item].firstlevel}
    {secondnav[i]= Try.try[item].secondlevel}
  </li>
 
));*/
const firstnav = [];
Object.keys(Try.try).map((item, i) => (
  <li key={i}>
    {firstnav[i]= {
      firstLevel : Try.try[item].firstlevel,
      secondLevel: Try.try[item].secondlevel
    }
    
    }
  </li>
 
));

const imageCarrusel = [];

 Object.keys(Carrusel.carrusel).map((item, i) => (
  <li key={i}>
    {imageCarrusel[i]={
      imageUrl : Carrusel.carrusel[item].urlImage,
      imageTitle : Carrusel.carrusel[item].titleImage,
      imageDesc : Carrusel.carrusel[item].descriptionImage
    }
      }
  </li>
 
));

const destacados = [];

 Object.keys(Destacados.destacados).map((item, i) => (
  <li key={i}>
    {destacados[i]={
      urlDestacados : Destacados.destacados[item].urlImageDestacados,
      linkDestacados : Destacados.destacados[item].enlaceDestacados,
      titleDestacados : Destacados.destacados[item].titleDestacados,
      descriptionDestacados : Destacados.destacados[item].descriptionDestacados
    }
      }
  </li>
 
));

//let first = null;

function App() {
  /*
  first = (
    <div>
    {firstnav.map((cont) =>{
      return <Header
      menu = {cont}
      />
    }
    )}</div>
  )*/
  return (
    <div className="App">
      <Header menu={firstnav} />
      <CarruselComponent img={imageCarrusel} />
      <DestacadosComponent cardDestacados={destacados}/>
      <Post />
      <Tags />
    </div>
  );
}

export default App;
