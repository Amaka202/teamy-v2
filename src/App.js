import 'antd/dist/antd.css';
import 'rsuite/dist/styles/rsuite-default.css';
import './App.css';
import { Route, Switch } from "react-router-dom";
import {ProtectedRoutes} from './components/ProtectedRoutes';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Posts from './components/Posts';
import MakeAPost from './components/MakeAPost';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/signup' exact component={SignUp} />

          <Route path='/login' exact component={Login} />
          <ProtectedRoutes path='/posts' exact component={Posts} />

          
      </Switch>   
    </div>
  );
}

export default App;
