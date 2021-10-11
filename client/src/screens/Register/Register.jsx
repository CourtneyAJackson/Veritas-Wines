import { useState } from 'react';
import "./Register.css"

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="outter-registration-container">
    <div className="form-register-container">
      <div className="register-container">
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.handleRegister(formData);
      }}
          >
             
      <h1 className= "register-title">Register</h1>
      <label>
        Username:
        <input
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type='text'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button className='form-register-button'>Submit</button>
          </form>
        </div>
      </div>
      </div>
  );
}