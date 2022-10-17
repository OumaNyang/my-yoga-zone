import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';
const FeaturedTutorials = () => {
  const [tutorials, setTutorials] = useState([]);
useEffect(() => {
  fetchProducts();
}, []);
const fetchProducts = () => {
  axios
    .get('./tutorials')
    .then((res) => {
      console.log(res);
      setTutorials(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
return (
    <div className='row'>
      <h4>Featured Yoga Tutorials</h4>
  {tutorials.map((tutorial) => (
    <div className="col-md-4 mt-4"key={tutorial.id} >
    <Card  >
    <Card.Img variant="top"style={{ height: '18rem' ,padding:"15px"}} src={tutorial.url} />
    <Card.Body>
    <Card.Title>{tutorial.name}   <hr></hr> </Card.Title>
    <Card.Text>
    {tutorial.description}
    </Card.Text>
    <Button className='rounded-0 btn btn-dark btn-md' variant="primary">Review</Button>
    <Button className='rounded-0 btn btn-primary btn-md' variant="primary">Watch</Button>
    </Card.Body>
    </Card>
    </div>
        ))}
      </div>
   );
};
export default FeaturedProducts;