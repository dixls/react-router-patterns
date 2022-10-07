import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ColorsList from './ColorsList';
import ColorsForm from './ColorForm';
import ColorDetails from './ColorDetails';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/colors/new">
          <ColorsForm />
        </Route>
        <Route path="/colors/:name">
          <ColorDetails />
        </Route>
        <Route exact path="/colors">
        </Route>
          <ColorsList />
      </Switch>
    </div>
  );
}

export default App;
