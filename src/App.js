import 'rsuite/dist/styles/rsuite-default.css';
import './App.css';
import './App.css';
import { Route, Switch } from "react-router-dom";

import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path='/' exact component={Home} />
          
      </Switch>   
    </div>
  );
}

export default App;
