import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SideBar from './SideBar.jsx';
import Home from './pages/Home.jsx';
import MyThankYous from './pages/MyThankYous.jsx';
import SentThankYous from './pages/SentThankYous.jsx';

//import axios from 'axios';

function App() {
  return (
    <div>
      <Router>
        <SideBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/mythankyous' component={MyThankYous} />
          <Route path='/sentthankyous' component={SentThankYous} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
