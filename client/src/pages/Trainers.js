import { useState,useEffect } from 'react';
import { Container } from 'react-bootstrap';

// import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaUser,FaEnvelope,FaMap } from 'react-icons/fa';

function Trainers(user) {

    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
      fetch("/trainers")
        .then((r) => r.json())
        .then(setTrainers);
    }, []);
  
  return (
      <div className="container">
      <h3 className='text-center text-primary rounded-0'>Trainers</h3> <hr></hr>
      {trainers.length > 0 ? (
       trainers.map((trainer) => (
      <Card style={{padding:"20px",border:"2px solid #8A2BE2",borderRadius:"0px",backgroundColor:"#e7e1fa",color:"#000",margin:"10px"}}  key={trainer.id}>
        <h5 className="font-weight-bold"> <FaUser /> {trainer.name}</h5>
        <h6><FaEnvelope /> {trainer.email}  &nbsp; &nbsp; | <span> <FaMap /> {trainer.address} </span></h6>
      </Card>
             ))):(
              <div className={'alert alert-primary rounded-0'}>No trainers found</div>
              )}
    </div>
    
  );


}
export default Trainers;
