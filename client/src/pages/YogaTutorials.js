import React, { useState, useEffect } from 'react';

import {Card,Container,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
function YogaTutorials (user){
  
const [tutorials, setTutorials] = useState([]);
const [success, setSuccess] = useState([]);
const [errors, setErrors] = useState([]);

useEffect(() => {
  fetch("/tutorials")
      .then((r) => r.json())
      .then(setTutorials);
  }, []);


  function onDelete (id) {
    fetch(`tutorials/${id}`, { method: "DELETE" 
  }).then((res) => {
    if (res.ok) {
      res.json().then((msg) => setSuccess(msg.success));
    } else {
      res.json().then((err) => setErrors(err.errors));
    }
  });
}

return (
  <Container>
        <div className='row'>
        <br></br>
    <h3 className='text-center text-primary rounded-0'> Yoga Tutorials</h3>
          <hr></hr>
          
        {errors?.map((err) => (
         <div className='alert alert-danger rounded-0'key={err}>{err}</div>
        ))}

         {success?.map((msg) => (
         <div className='alert alert-success rounded-0'key={msg}>{msg}</div>
        ))}

          {tutorials.length > 0 ? (
        tutorials.map((tutorial) => (
    <div className="col-md-4 mt-4"key={tutorial.id} >
    <Card  >
    {/* <Card.Img variant="top"style={{ height: '18rem' ,padding:"15px"}} src={tutorial.url} /> */}
    <Card.Body>
    <iframe 
      width={"100%"}
      height={'200em'}
        src={tutorial.url}
        frameBorder='0'
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullscreen
        title='Yoga Tutorial'
         />
    <Card.Title>{tutorial.name}   <hr></hr> </Card.Title>
    <Card.Text>
    {tutorial.description}
    </Card.Text>
    <Button className='rounded-0 btn btn-dark btn-md' variant="primary">Rate</Button>
    <Button  onClick={() => {if(window.confirm(`Delete ${tutorial.name} from records?`)){
onDelete(tutorial.id)};}} 
 className='rounded-0 btn btn-danger btn-md' variant="primary">Delete</Button>
    </Card.Body>
    </Card>
    </div>
   ))):(
    <div className={'alert alert-primary rounded-0'}>No yoga tutorials found</div>
   )}
      </div>
   </Container>
 
  );
};
export default YogaTutorials;