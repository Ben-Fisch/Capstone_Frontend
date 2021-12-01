import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import jwtDecode from 'jwt-decode';
import Chart from 'chart.js/auto';


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
                <h1>Hello World</h1>

                <div>
                    
                    
                </div>

            </div>
        );
    }
}
 
export default App;