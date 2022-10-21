import {React,useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div className="container">
    <div className='row justify-content-center'>
  <div className='col-md-6 mt-4' style={{  backgroundColor:"#dede"  }} >
  <h2 className='text-center mt-4 font-weight-bold'>MY YOGA ZONE</h2>
  <div className='alert alert-info rounded-0'>Get all your yoga lessons at the comfort of your home.</div>
       {
        showLogin
        ? (
            <>
              <LoginForm onLogin={onLogin} />
              <br />
              <p>
                Don't have an account? &nbsp;
                <button className='btn  btn-block btn-light text-primary ' onClick={() => setShowLogin(false)}>Sign Up</button>
              </p>
            </>
        )
        : (
            <>
              <SignUpForm onLogin={onLogin} />
              <br />
              <p>
                Already have an account? &nbsp;
                <button className='btn   btn-block btn-light text-primary ' onClick={() => setShowLogin(true)}>Log In</button>
              </p>
       
            </>
           
        )
      }
  </div>
      <div className='col-m-6'>  </div>
</div>
</div>

  );
}

export default Login;
