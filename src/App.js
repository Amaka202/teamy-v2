import 'rsuite/dist/styles/rsuite-default.css';
import './App.css';
import './App.css';
import { Route, Switch } from "react-router-dom";

import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/signup' exact component={SignUp} />
          <Route path='/login' exact component={Login} />
          
      </Switch>   
    </div>
  );
}

export default App;
