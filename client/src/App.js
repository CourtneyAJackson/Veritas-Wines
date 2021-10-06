import './App.css';
import {Switch, Route} from 'react-router-dom'
import Layout from './layouts/Layout'

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/wines'>
            
          </Route>
        </Switch>
     </Layout>
    </div>
  );
}

export default App;
