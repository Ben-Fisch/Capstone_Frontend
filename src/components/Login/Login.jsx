import React, { Component } from 'react';
import 'react-router-dom';
import './Login.css';
import { Link } from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",

        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const login = {
            username: this.state.username,
            password: this.state.password,
        };
        this.props.loginUser(login);
        this.setState({
            username: "",
            password: "",
        });
        
    }

    render() {
        return (
          
            
                <form onSubmit={this.handleSubmit}>
                        <div className="container">
                            <h1 className="loginheader">Login</h1>
                            <p className="action">Please enter your username and password!</p>
                            <hr />
                            <div >
                                <label for="username">Username</label>
                                <input type="text" name= "username" placeholder="Enter Username" id="username" onChange={this.handleChange} value={this.state.username}  />    
                            </div>
                            <div >
                                <label for="password" >Password</label>
                                <input type="password" name= "password" placeholder="Enter Password" id="password" onChange={this.handleChange} value={this.state.password} />
                            </div>
                            
                            <div >
                                <div>
                                    <button type="submit" className="loginbtn">Login</button>
                                </div>
                                <div className="container register">
                                    <p>Don't have an account? <a href="/Register">Register</a> </p>
                                </div>
                                                
                                    
                                    
                                    
                            </div>
                            
                            
                        </div>
                        
                </form>

         

        )
    }
}

export default Login