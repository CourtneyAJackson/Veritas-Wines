import { useState } from 'react';
import {Link} from 'react-router-dom';

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
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
    <div className="form-container">
    <div className="outter-container">
      <div className="form-sign-in-container">
        <h1 className="signInLabel">Sign In</h1>
    <form onSubmit={(e)=> {
      e.preventDefault();
      props.handleLogin(formData);
          }}>
           
      <h3 className='login-label'>Login</h3>
            <div className='username-input'>
              <label>
        Username:
      </label>
      <input
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <br />
      <div className='pw-input'>
      <label>
        Password:
      </label>
      <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <br />
      <Link to='/register'>Register</Link>
      <button className='form-button'>Submit</button>
          </form>
        </div>
        <div className='wine-img'>
          <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6uc9w1m2QuCUxXuD6-Qp1LP-5QwgG2s5r5w&usqp=CAU'
          alt='grapes'
          />
          </div>

      </div>
      </div>
  );
}
