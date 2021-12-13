import React, { useEffect } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';
import { useState } from 'react/cjs/react.development';

const NavBar = (props) => {

    const logoutUser = () => {
        localStorage.removeItem('token');
        window.location = ('/Login')
    }

    render(); {
        if (localStorage.getItem('token') == undefined) {
            return (
                <nav className="logged-out">
                    <ul>
                        <h1 className="nav-title">Move Fitness</h1>
                        <hr className="nav-hr" />
                        <Link to='/Login'> <li>Login</li> </Link>
                        <Link to='/Register'> <li>Register</li> </Link>
                    </ul>
                </nav>
            )
        } else {
            return (
                <nav>
                    
                    <ul>
                        <h1 className="nav-title">Move Fitness</h1>
                        <hr className="nav-hr" />
                        <li>
                            <Link to='/Home'> Home </Link>
                        </li>
                        <li>
                            <Link to='/Weight'> <li>Weight</li> </Link>
                        </li>
                        <li>
                            <Link to='/Lifting'> <li>Lift</li> </Link>
                        </li>
                        <li>
                            <Link to='/Cardio'> <li>Cardio</li> </Link>
                        </li>
                        <li>
                            <Link to='/CardioPR'> <li>Cardio PR</li> </Link>
                        </li>
                        <li>
                            <Link to='/LiftingPR'> <li>Lift PR</li> </Link>
                        </li>
                        <li>
                            <Link onClick={() => logoutUser()}> <li> Logout </li></Link>
                        </li>
                        
                    </ul>
                </nav>
            )
        }
    };
}
//     return (
// <nav>
            
            
            
//             <ul>
            
//                 <React.Fragment>
                        
//                     <Link to='/Home'> <li>Home</li> </Link>
//                         <Link to ='/Weight'> <li>Weight</li> </Link>
//                         <Link to ='/Lifting'> <li>Lift</li> </Link>
//                         <Link to ='/Cardio'> <li>Cardio</li> </Link>
//                         <Link to ='/CardioPR'> <li>Cardio PR</li> </Link>
//                         <Link to ='/LiftingPR'> <li>Lifting PR</li> </Link>
//                         <Link onClick={() => logoutUser()}> <li> Logout </li></Link>
                        
//                 </React.Fragment>
            
            
//                     <React.Fragment>
//                         <Link to ='/Login'> <li>Login</li> </Link>
//                         <Link to ='/Register'> <li>Register</li> </Link>                   
//                     </React.Fragment>          
         
             
//             </ul>
         
// </nav>
//     );
// }

export default NavBar;