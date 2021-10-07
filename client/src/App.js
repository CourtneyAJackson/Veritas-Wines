import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import './App.css';

import Layout from './layouts/Layout';
import LogIn from './screens/LogIn';
import Register from './screens/Register';
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
      </Layout>
    </div>
  );
}

export default App;