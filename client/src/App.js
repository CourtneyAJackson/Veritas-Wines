import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import './App.css';
import './index.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { ClassNames } from '@emotion/react';
import { makeStyles } from '@material-ui/core';


import Layout from './components/layouts/Layout';
import LogIn from './screens/Login/LogIn';
import Register from './screens/Register/Register';
import MainContainer from './containers/MainContainer';

import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from './services/auth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  };

  return (
    <div className='App'>
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path='/login'>
            <LogIn handleLogin={handleLogin} />
          </Route>
          <Route path='/register'>
            <Register handleRegister={handleRegister} />
          </Route>
          <Route path='/'>
            <MainContainer />
          </Route>
        </Switch>
      
      {/* <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Veritas Wines
          </Typography>
            <Button href={'/login'} color="inherit">Login</Button>
            
            <Button href={'/register'} color="inherit">Register</Button>
            <Button href={ '/wines'}size ="small" color="inherit">Our Collection</Button>
          </Toolbar>
      </AppBar>
      </Box>
      <Box >
        <Box>box</Box>
        </Box> */}
      </Layout>
   
      
    </div>
  );
}

export default App;
