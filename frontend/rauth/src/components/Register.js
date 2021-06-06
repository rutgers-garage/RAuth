import React from 'react';
import "./styling/Register.css";


const Register = () => {

  const submitForm = (event) => {
    event.preventDefault();
    fetch("http://127.0.0.1:5000/addUser", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        netid: sessionStorage.getItem("email"),
        nonRutgersEmail: event.target.email.value,
        fullName: event.target.name.value,
        gradYear: event.target.year.value,
        degreeType: event.target.degree.value
      })
    });
  }
 
  return(
    <div>
      <h1>Register</h1>
      <div className="reg">
        <form id="regForm" onSubmit={submitForm}>
          <label>
            Regular Email:
            <input name="email" type="text"/>
          </label>

          <label>
            Full Name:
            <input name="name" type="text" />
          </label>

          <label>
            Grad Year:
            <input name="year" type="text" />
          </label>

          <label>Degree Type:</label>
          <select name="degree" type="degree">
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

export default Register;
