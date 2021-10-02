import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Components
import Home from './pages/home/Home';
import Admin from './components/admin/Admin';

function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route path='/' exact component={Home}/>
          <Route path='/admin' component={Admin}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
