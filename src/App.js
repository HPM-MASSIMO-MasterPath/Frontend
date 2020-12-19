import React from 'react';
import Layout from './layout/Layout.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
// import Layout from './layout/Layout.jsx';
import ChallengeDescription from './components/ChallengeDescription/ChallengeDescription.jsx';
import './assets/styles/components/App.scss';
import './assets/styles/components/Global.scss';
import Login from './components/Login/Login';
// import Layout from './layout/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route
            exact
            path='/challengeDescription/:id'
            component={ChallengeDescription}
          />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
