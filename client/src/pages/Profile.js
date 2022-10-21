import {React,useState } from 'react';
import { useHistory } from 'react-router-dom';

function Profile({ setUser, user }) {
  return (
      <div className="container">
      <h3 className='text-center text-primary'>MY PROFILE</h3>
     <hr></hr>


    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-md-9 col-lg-7 col-xl-5">
        <div className="card" style={{borderBadius: "15px"}}>
          <div className="card-body p-4">
            <div className="d-flex text-black">
              <div className="flex-shrink-0">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                  alt="Generic placeholder image" className="img-fluid"
                  style={{width:" 180px",borderRadius: "10px"}}/>
              </div>
              <div className="flex-grow-1 ms-3">
                <h5 className="mb-1"> </h5>
                <p className="mb-2 pb-1" style={{color:"#2b2a2a"}}>Trainee</p>
                <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                  style={{backgroundColor: "#efefef"}}>
                  <div>
                    <p className="small text-muted mb-1">Reviews</p>
                    <p className="mb-0">8.5</p>
                  </div>
                </div>
                <div className="d-flex pt-1">
                  <button type="button" className="btn btn-outline-primary me-1 flex-grow-1">Chat</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );

}

export default Profile;
