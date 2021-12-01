import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import jwtDecode from 'jwt-decode';
import Chart from 'chart.js/auto';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedInUser: null,
        }
    }
    render() { 
        return (
            <div>
                <NavBar/>
                <h1>Hello World</h1>

                <Footer/>

            </div>
        );
    }
}
 
export default App;