import React, { Component } from 'react';
import "./styling/Register.css";

class Register extends Component{
  submitFormHandler(event){
    event.preventDefault();
    fetch("http://127.0.0.1:5000/addUser", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        netid: sessionStorage.getItem("email"),
        nonRutgersEmail: document.getElementById("regForm").elements[0].value,
        fullName: document.getElementById("regForm").elements[1].value,
        gradYear: document.getElementById("regForm").elements[2].value,
        degreeType: document.getElementById("regForm").elements[3].value
      })
    });
  }
  render(){
    return(
      <div>
        <h1>Register</h1>
        <div className="reg">
          <form id="regForm" onSubmit={this.submitFormHandler}>
            <label>
              Regular Email:
              <input id="email" type="text"/>
            </label>

            <label>
              Full Name:
              <input id="name" type="text" />
            </label>

            <label>
              Grad Year:
              <input id="year" type="text" />
            </label>

            <label>Degree Type:</label>
            <select id="degree" name="degree">
              <option value="BA">Bachelor of Arts</option>
              <option value="BA">Bachelor of Science</option>
              <option value="MS">Masters</option>
            </select>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
