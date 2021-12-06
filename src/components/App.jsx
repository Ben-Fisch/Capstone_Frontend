import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import jwtDecode from 'jwt-decode';
import Chart from 'chart.js/auto';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';
import Register from './Register/Register';
import Login from './Login/Login';
import axios from 'axios';
import DisplayWeight from './DisplayWeight/DisplayWeight';
import DisplayCardio from './DisplayCardio/DisplayCardio';
import DisplayLifting from './DisplayLifting/DisplayLifting';
import DisplayCardioPR from './DisplayCardioPR/DisplayCardioPR';
import DisplayLiftingPR from './DisplayLiftPR/DisplayLiftPR';
import Home from './Home/Home';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedInUser: null,
            jwt: "",
            weights: [],
            cardios: [],
            lifts: [],
            pr_cardios: [],
            pr_lifts: []
        }
    }

    componentDidMount() {

        const jwt = localStorage.getItem('token');
        try {
            const user = jwtDecode(jwt);
            this.setState({loggedInUser: user})
        } catch (error) {
            console.log(error);
        }
    }

    registerNewUser = async (user) => {
        console.log("User object from Register: ", user)
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/auth/register/', user);
            console.log(response)
            this.loggedInUser = ({'userName': user.userName, 'password': user.password})
            window.location = ('/Login')

        }
        catch(error) {
            console.log(error, 'Invalid input');
        }
    }

    loginUser = async (login) => {
        console.log("User object from login:", login)
        try {
            let response = await axios.post('http://127.0.0.1:8000/api/auth/login/', login);

            this.setState({
                user: response.data.access
            });
            this.setState({
                jwt: response.data.access
            });
            localStorage.setItem('token', response.data.access);
            
            window.location = ('/Home')

        } catch (error) {
            alert('Invalid username or password')
        }
  
    }


    render() { 
        return (
            <div>
                <NavBar />
                <Switch>
                <Route path='/Register' render={props => <Register {...props} registerNewUser={this.registerNewUser}/>} /> 
                <Route path='/Login' render={props => <Login {...props} loginUser={this.loginUser}/>} />
                <Route path='/Weight' render={props => <DisplayWeight {...props} weights={this.state.weights} />} />
                <Route path='/Cardio' render={props => <DisplayCardio {...props} cardios={this.state.cardios} />} />
                <Route path='/Lifting' render={props => <DisplayLifting {...props} lifts={this.state.lifts} />} />
                <Route path='/CardioPR' render={props => <DisplayCardioPR {...props} pr_cardios={this.state.pr_cardios} />} />    
                <Route path='/LiftingPR' render={props => <DisplayLiftingPR {...props} pr_lifts={this.state.pr_lifts} />} />
                <Route path='/Home' component={Home} />
                </Switch>
                <Footer/>
            </div>
        );
    }
}
 
export default App;