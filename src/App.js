import './App.css';
import {Music} from './music/Music';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Music />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

