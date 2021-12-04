import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';



const NavBar = ({user}) => {

    const logoutUser = () => {
        localStorage.removeItem('token');
        window.location = ('/')
    }

    return (
<nav>
            
            {user && <h4> Welcome {user.username} </h4>}
            
            <ul>
                <React.Fragment>
                        
                        <Link to ='/Home'> <li>Home</li> </Link>
                        <Link to ='/Weight'> <li>Weight</li> </Link>
                        <Link to ='/Lifting'> <li>Lift</li> </Link>
                        <Link to ='/Cardio'> <li>Cardio</li> </Link>
                        <Link to ='/CardioPR'> <li>Cardio PR</li> </Link>
                        <Link to ='/LiftingPR'> <li>Lifting PR</li> </Link>
                        <Link onClick={() => logoutUser()}> <li> Logout </li></Link>
                        
                </React.Fragment>
            
            {!user &&
                    <React.Fragment>
                        <Link to ='/Login'> <li>Login</li> </Link>
                        <Link to ='/Register'> <li>Register</li> </Link>                   
                    </React.Fragment>          
         
            }    
            </ul>
         
</nav>
    );
}

export default NavBar;