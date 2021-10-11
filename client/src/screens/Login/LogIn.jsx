import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"

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
    <div className="outter-container">
    <div className="form-signin-container">
      <div className="form-container">
        <h1 className="signInLabel">Log In</h1>
    <form onSubmit={(e)=> {
      e.preventDefault();
      props.handleLogin(formData);
          }}>
           
    
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
          
   
        {/* <img className='wine-sign-in-pic'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIh5VYkXxlpQADa_yDU8C2Kke_gonxpH_hbQ&usqp=CAU'
        alt='wine image'
        />
          */}
          

      </div>
      </div>
  );
}
