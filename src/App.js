import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Chapters from './components/Chapters';
// import Navbar from './components/navbar';
import Donate from './components/Donate';
import Conclusion from './components/Conclusion';
import Extrablessings from './components/Extrablessings';
import AppLogo from './components/appLogo'



const App = () => {
    return (

     <Router>
       {/* <Jumbotron title='healing after death' subtitle='hello!'  /> */}
       
          <div>
          <AppLogo />
           
             <ul> 
                  <li><Link to='/home'>Home</Link></li>
                  <li><Link to='/about'>About</Link></li>
                  <li><Link to='/chapter'>Chapters</Link></li>
                  <li><Link to='/donate'>Donate</Link></li>
                  <li><Link to='/extrablessing'>Extrablessings</Link></li>
                  <li><Link to='/conclusion'>Conclusion</Link></li>
            </ul>
                <Route  extact path='/home' component={Home} />
                <Route  path='/about'component={About} />
                <Route  path='/chapter' component={Chapters}/>
                <Route  path='/conclusion' component={Conclusion} />
                <Route  path='/extrablessings' component={Extrablessings} />
                <Route  path='/donate' component={Donate} />
         </div>
         
      </Router>
    
    );
  }
export default App;







// const styles = StyleSheet.create ({

