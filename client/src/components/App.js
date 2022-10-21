import { useEffect, useState,React } from 'react';
import {Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
// import '../styles/App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import Login from '../pages/Login';
import NewTutorial from '../pages/NewTutorial';
import Trainers from '../pages/Trainers';
import YogaTutorials from '../pages/YogaTutorials';
import Trainees from '../pages/Trainees';
import Profile from '../pages/Profile';

function App() {
  const [user, setUser] = useState(null);
  const [trainers, setTrainers] = useState([]);


  // useEffect(() => {
  //   fetch('/me')
  //     .then(r => {
  //       if (r.ok) {
  //         r.json().then(userObj => setUser(userObj));
  //       }
  //     });
  // }, []);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);




  useEffect(() => {
    // fetch("/trainers")
    //   .then((r) => r.json())
    //   .then( (trainers)=>setTrainers);

      fetch("/trainers").then((r) => {
        if (r.ok) {
          r.json().then((trainers) => setTrainers(trainers));
        }
      });

  }, []);


   if (!user) return <Login onLogin={setUser} />;
  
  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <Container style={{background:"#dede"}} >
      <Routes>
        <Route exact  path="/add-tutorial"  element={<NewTutorial setTrainers={setTrainers} trainers={trainers}  user={user}   />}/>
        <Route path="/"   element={<YogaTutorials/>}/>
        <Route path="/yoga-tutorials"  element={<YogaTutorials />}/>
        <Route path="/trainers"    element={<Trainers trainers={trainers} setTrainers={setTrainers}/>}/>
        <Route path="/trainees"    element={<Trainees/>}/>
        <Route path="/profile" element={<Profile user={user} />}/>
      </Routes>
      <Footer/>
      </Container>

    </>
  );
}

export default App;
