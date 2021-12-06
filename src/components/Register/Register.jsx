import React, { Component } from 'react';
import './Register.css';

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            email:"",
            first_name:"",
            last_name:"",
            middle_name:"",
         };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            middle_name: this.state.middle_name,
        };
        this.props.registerNewUser(user);
        this.setState({
            username: "",
            password: "",
            email: "",
            first_name: "",
            last_name: "",
            middle_name: "",
        });
    }

    render() {
        return (
          
            <div    >
                <form className="container register-form" onSubmit={this.handleSubmit} >
                        <div >
                            <div >
                                <div>
                                <h1 className="registerheader">Register</h1>
                                <p className="action">Please fill in this form to create an account.</p>
                                <hr />
                                </div>

                            <div >
                                <label for="first_name" >First Name</label>
                                <input type="text" name = "first_name" placeholder="Enter First Name" id="first_name" onChange={this.handleChange} value={this.state.first_name} />
                            </div>
                            <div >
                                <label for="last_name">Last Name</label>
                                <input type="text" name = "last_name" placeholder="Enter Last Name" onChange={this.handleChange} value={this.state.last_name} />
                            </div>
                            <div >
                                <label for="username">Username</label>
                                <input type="text" name = "username" placeholder="Create Username" id="username" onChange={this.handleChange} value={this.state.username} />
                            </div>
                            <div >
                                <label for="password" >Password</label>
                                <input type="text" name = "password" minlength="8" placeholder="Create Password" id="password" onChange={this.handleChange} value={this.state.password} />
                            </div>
                            <div >
                                <label for="email">Email</label>
                                <input type="text" name = "email" placeholder="Enter Email" id="email" onChange={this.handleChange} value={this.state.email} />
                            </div>
                            <div >
                                <label for="middle_name">Middle Name</label>
                                <input type="text" name = "middle_name" placeholder="Enter Middle Name" id="middle_name"  onChange={this.handleChange} value={this.state.middle_name} />
                            </div>
                            
                            <div >
                                <button type="submit" className="registerbtn">Register</button>
                            </div>
                            </div>  
                        </div>
                </form>
            </div>

        )
    }
}

export default Register;