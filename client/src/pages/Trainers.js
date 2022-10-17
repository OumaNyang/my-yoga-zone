import { useState,useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';

// import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaUser,FaEnvelope,FaMap } from 'react-icons/fa';

function Trainers() {

  const FeaturedTrainers = () => {
    const [trainers, setTrainers] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = () => {
    axios
      .get('./trainers')
      .then((res) => {
        console.log(res);
        setTrainers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (

      <div className="container">
      <h3 className='text-center text-primary rounded-0'>Trainers</h3> <hr></hr>
      {trainers.map((trainer) => (
      <Card style={{padding:"20px",border:"2px solid #8A2BE2",borderRadius:"0px",backgroundColor:"#e7e1fa",color:"#000",margin:"10px"}}  key={trainer.id}>
        <h5 className="font-weight-bold"> <FaUser /> {trainer.name}</h5>
        <h6><FaEnvelope /> {trainer.email}  &nbsp; &nbsp; | <span> <FaMap /> {trainer.address} </span></h6>
      </Card>
      
    
        ))}
    </div>
    
  );

}
}
export default Trainers;
