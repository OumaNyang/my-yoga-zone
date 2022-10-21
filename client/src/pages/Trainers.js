import { useState,useEffect } from 'react';
import { Container,Card } from 'react-bootstrap';
// import { useHistory } from 'react-router-dom';

function Trainers({trainers}) {

  return (
      <div className="container">
      <h3 className='text-center text-primary rounded-0'>Available Trainers</h3> <hr></hr>
<div className="row">
 
      {trainers.length > 0 ? (
       trainers.map((trainer) => (

        <div className="col-md-4 mt-2" key={trainer.id} >
          <div className="card" style={{borderBadius: "15px"}}>
            <div className="card-body">
              <div className="d-flex text-black">
           
                <div className="flex-grow-1  ">
                  <h5 className="mb-1"> {trainer.name} <span> | Trainer</span></h5>
                  <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                    style={{backgroundColor: "#efefef"}}>
                    <div>
                      <p className="small text-muted mb-1">Reviews</p>
                      <p className="mb-0">0</p>
                    </div>
                </div>
                  <div className="d-flex">
                  <p className="small "> <strong>Email</strong>  <span> {trainer.email}</span> </p>
                  </div>
                  <div className="d-flex ">
                  <p className="small"> <strong>Address</strong>  <span> {trainer.address}</span> </p>
                  </div>
                  <div className="d-flex pt-1">
                    <button type="button" className="btn btn-outline-primary me-1 flex-grow-1">Book</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
   
             ))):(
              <div className={'alert alert-primary rounded-0'}>No trainers found</div>
              )}
    </div>
    </div>
    
  );


}
export default Trainers;
