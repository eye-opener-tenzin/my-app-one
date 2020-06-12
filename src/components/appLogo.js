import React from 'react';
import logo from '../buddhalogo.svg';


class AppLogo extends React.Component {
   render () {
       return(
           <div>
                <img src={logo} alt={logo}></img> 
           </div>
       )
   }
}
export default AppLogo;