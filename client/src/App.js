// import {useEffect, useState} from 'react'
import React from  'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Reviews from './components/Reviews'
import AddYogaTutorials from './components/AddYogaTutorials'
import YogaTutorials from './components/YogaTutorials'
import Signup from './components/Signup'
import Login from './components/Login'
import Breadcrumbs from './components/Breadcrumb'

import { Link } from "react-router-dom";

const App = () => {
    return (
<>
<Header/>
<div className='container' style={{background:"#dede"}}> 
<Breadcrumbs/>
{/* <YogaTutorials/> */}
<AddYogaTutorials/>
{/* <Login /> */}
{/* <Signup/> */}
<Router>
    <routes>
        <route path="./" component={YogaTutorials}>

        </route>
    </routes>
</Router>
<Footer/>
</div>

<Router>
<Routes>
<Route path="/reviews" element={<Reviews/>} />
</Routes>
</Router>
</>

 );
}
export default App
