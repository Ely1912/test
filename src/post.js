import axios from 'axios';
import {Card, CardGroup, Button} from 'react-bootstrap/';
import React, { useState, useEffect } from 'react';


<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>

 function Post () {
  const [data, setData] = useState( [] );
 
  const fetchData = async (start, limit) => {
    try{
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`,
    );
    console.log(result.data);

    setData([...data, ...result.data]);
    }catch (error){
      console.log("epic fail");
    }

  };

  useEffect(() => {
   fetchData(0,4);
}, []);



const handleClick= ()=>{
 console.log("was clicked");
    fetchData(4, 4);
   
}
   
    return (
        <div>
          <h2 style={{marginTop:'3%'}}>Ultimas Noticias</h2>
         <CardGroup style={{display: 'flex', margin: '5%'}}> 
      {data.map(item => (
        <div style={{width: '50%' , height: 'auto', padding:'10px', 
        boxSizing: 'border-box', border: '1px solid black', }}>
     
  <Card.Body>
    <Card.Title>{item.title}</Card.Title>
    <Card.Text>
      {item.body}
    </Card.Text>
  </Card.Body>

</div>
      ))}
     
     </CardGroup>  
       
    <Button onClick={handleClick}>Mostrar mas</Button>
   
        </div>
      
    )
  }


export default Post;