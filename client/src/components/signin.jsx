import React, {Component} from 'react';
import '../stylesheet/index.scss';
// import axios from 'axios';

class SignIn extends Component{
  constructor(props){
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    }
    // this.onChange = this.onChange(this);
    // this.onSubmit = this.onSubmit(this);
  }

  // const registerUser = axios.get(`https://localhost/api/v1/users`, this.state)
  // .then(response => response.json())
  // .then(response => response.data)
  // .catch(response === {} => response);

  // onChange(e){
  //   const {first_name, last_name, email, password} = e.target
  //   this.setState(first_name, last_name, email, password);
  // };

  // onSubmit(e){
  //   return "null";
  //   // registerUser(this.state);
  // };

  render(){
    return (
      <div className="signin-modal">
        <h1 className="title">Sign In</h1>
        <form className="signin-form">
          <label>
            First Name:
            <br />
            <input type="text" name="input-values" />
          </label>
          <label>
            Last Name:
            <br />
            <input type="text" name="input-values" />
          </label>
          <label>
            Email:
            <br />
            <input type="text" name="input-values" />
          </label>
          <label>
            Password:
            <br />
            <input type="text" name="input-values" />
          </label>
          <input type="submit" value="Submit" className="submit" />
        </form>
      </div>
    )
  }
}

export default SignIn;
