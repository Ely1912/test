import Carousel from 'react-bootstrap/Carousel';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>



function CarruselComponent(props) {
  return(
<Carousel style={{marginTop:'1%'}}>
{props.img.map((cont, item) =>
  <Carousel.Item interval={1000} >
    <img
      className="d-block w-100"
      src={cont.imageUrl}
      alt="First slide"
      style={{height:'60vh'}}
    />
    <Carousel.Caption >
      <h2>{cont.imageTitle}</h2>
      <p>{cont.imageDesc}</p>
    </Carousel.Caption>
  </Carousel.Item>
)}
</Carousel>
  )
}

export default CarruselComponent;