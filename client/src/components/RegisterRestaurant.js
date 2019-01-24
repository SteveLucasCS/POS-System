import React, { Component } from 'react';
import { Input, FormBtn } from './Form';
import API from "../utils/API";
const Validator = require("./Validator");

class Register extends Component {
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
    // console.log(`${name}: ${value}`);
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (Validator.validateEmail(this.state.email)) {
      if (Validator.validatePassword(this.state.password)) {
        if (Validator.validateConfirm(this.state.password, this.state.confirm)) {
          console.log("handleFormSubmit");
          const restSubmit = {
            name: this.state.name,
            email: this.state.email,
          }

          API.createRestaurant(restSubmit).then(res => {
            console.log("res", res);
            const userSubmit = {
              username: this.state.username,
              email: this.state.email,
              password: this.state.password,
              restaurantID: res.data._id,
              manager: true
            }
            API.createUser(userSubmit).then(res => {

            }).catch(err => console.log(err));
          }).catch(err => console.log(err));
        } else {
          //user confirm fail
          console.log("user confirm fail");
        }
      } else {
        //user password fail
        console.log("user password fail");
      }
    } else {
      //user email fail
      console.log("user email fail");
    }
  }

  displayRestaurants = () => {
    API.getRestaurants()
      .then(res => {
        console.log(res);
        this.setState({ name: "", email: "" })
      }).catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form>
          <Input onChange={this.handleInputChange} name="name" placeholder="Restaurant Name" />
          <Input onChange={this.handleInputChange} name="username" placeholder="UserName" />
          <Input onChange={this.handleInputChange} name="email" placeholder="Email" />
          <Input onChange={this.handleInputChange} name="password" placeholder="password" />
          <Input onChange={this.handleInputChange} name="confirm" placeholder="confrim password" />
          <FormBtn onClick={this.handleFormSubmit}>
            Create New User
          </FormBtn>
        </form>
      </div>
    );
  }
}

export default Register;
