import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
// import { Link } from 'react-router-dom'
function SignUpForm({onLogin}) {
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [name, setName] = useState("");
const [password, setPassword] = useState("");
const [password_confirmation, setConfirmPassword] = useState("");
const [errors, setErrors] = useState([]);
const [success, setSuccess] = useState([]);

const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        username,
        email,
        password,
        password_confirmation
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
       r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  
  }
  return ( 

  <div className="login-card"> 
    <div className='card'>
<h6 className='alert alert-info rounded-0'>Please create your user account</h6>
      <div className='card-body'>
        <form  onSubmit={handleSubmit} method="post">
        <div className='form-group'>
          <label>Full Name</label>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name} id='name' required className='form-control' />
          </div>
          <div className='form-group'>
          <label>Username</label>
          <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} id='username' required className='form-control' />
          </div>
            <div className='form-group'>
            <label>Email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} required name='email' className='form-control' />
            </div> <div className='form-group'>
            <label>Password</label>
            <input type="password" required name='password' onChange={(e) => setPassword(e.target.value)} value={password} className='form-control' />
            </div> <div className='form-group'>
            <label>Confirm Password</label>
            <input type="password" onChange={(e) => setConfirmPassword(e.target.password_confirmation)} value={password_confirmation} id='confirmPassword' required className='form-control' />
            </div>
             <div className='form-group mt-4 justify-content-right'>
           <button  type='submit' className='btn btn-md  btn-block '> {isLoading ? "Loading..." : "SignUp"}</button>
            </div> 
        </form> 
        <hr></hr>
        {errors?.map((err) => (
         <div className='alert alert-danger rounded-0'key={err}>{err}</div>
        ))}

         {success?.map((msg) => (
         <div className='alert alert-success rounded-0'key={msg}>{msg}</div>
        ))}
           
      </div>
 
      </div>
          
      </div>

  );
}

export default SignUpForm;
