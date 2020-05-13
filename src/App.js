// Dependencies
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import PageHeader from './Components/PageHeader';
import PageFooter from './Components/PageFooter';
import Home from './Components/Home';

// CSS
import './App.css';

function App() {
  return (
    <div id="App">
      <PageHeader />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route render={() => <Redirect to={{pathname: "/"}} />} />
        </Switch>
      </div>
      <PageFooter />
    </div>
  );
}

export default App;
