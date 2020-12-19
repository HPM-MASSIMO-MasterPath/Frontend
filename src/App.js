import React from 'react';
import Layout from './layout/Layout.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import ChallengeDescription from './components/ChallengeDescription/ChallengeDescription.jsx';

import './assets/styles/components/App.scss';
import './assets/styles/components/Global.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route
            exact
            path='/challengeDescription'
            component={ChallengeDescription}
          />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
