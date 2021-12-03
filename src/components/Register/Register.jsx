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
          
<div className="container">
   <form onSubmit={this.handleSubmit} className="form-signup">
        <div className="row">
            <div className="col">
                <div>
                  <h1 class="fs-1 fw-bold mb-5 text-uppercase">Register</h1>
                  <p class="fs-5 text-white-50 mb-4">Please enter registration information</p>
                </div>

                <div class="form-outline form-white mb-2">
                  <input type="text" name = "first_name" id="typeFirstNameX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.first_name} />
                  <label class="form-label fs-6 fw-bold" for="typeFirstNameX">First Name</label>
                </div>

                <div class="form-outline form-white mb-2">
                  <input type="text" name = "last_name" id="typeLastNameX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.last_name} />
                  <label class="form-label fs-6 fw-bold" for="typeLastNameX">Last Name</label>
                </div>
                <div class="form-outline form-white mb-2">
                  <input type="text" name = "username" id="typeUserNameX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.username} />
                  <label class="form-label fs-6 fw-bold" for="typeUserNameX">User Name</label>
                </div>
                <div class="form-outline form-white mb-2">
                  <input type="text" name = "password" minlength="8" id="typePasswordX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.password} />
                  <label class="form-label fs-6 fw-bold" for="typePasswordX">Password</label>
                </div>
                <div class="form-outline form-white mb-2">
                  <input type="text" name = "email" id="typeEmailX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.email} />
                  <label class="form-label fs-6 fw-bold" for="typeEmailX">Email</label>
                </div>
                <div class="form-outline form-white mb-4">
                  <input type="text" name = "middle_name" id="typeMiddleNameX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.middle_name} />
                  <label class="form-label fs-6 fw-bold" for="typeMiddleNameX">Middle Name</label>
                </div>
                <div class="card-footer">
                    <button class="btn btn-outline-light btn-lg" type="submit">Register</button>
                </div>
            </div>  
        </div>
  </form>
</div>

        )
    }
}

export default Register;