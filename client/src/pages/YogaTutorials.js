import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function YogaTutorials (){
  
const [tutorials, setTutorials] = useState([]);

useEffect(() => {
  fetch("/tutorials")
      .then((r) => r.json())
      .then(setTutorials);
  }, []);

return (
    <div className='row'>
        <br></br>
    <h3 className='text-center text-primary rounded-0'> Yoga Tutorials</h3>
          <hr></hr>
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
    <Button className='rounded-0 btn btn-primary btn-md' variant="primary">Watch</Button>
    </Card.Body>
    </Card>
    </div>
   ))):(
<h5>No Tutorials Found</h5>
   )}
      </div>
 
  );
};
export default YogaTutorials;