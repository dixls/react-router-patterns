import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import ColorsList from './ColorsList';
import ColorsForm from './ColorForm';
import ColorDetails from './ColorDetails';
import { useState } from 'react';

function App() {
  const [colors, setColors] = useState({
    green: "#04a800",
    red: "#a80000",
    blue: "#0030d5"
  })

  const addColor = ({ colorData, colorName }) => {
    setColors({
      ...colors,
      [colorName]: colorData
    });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/colors/new">
            <ColorsForm addColor={addColor} />
          </Route>
          <Route path="/colors/:name">
            <ColorDetails />
          </Route>
          <Route exact path="/colors">
            <ColorsList colors={colors} />
          </Route>
          <Redirect to="/colors" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
