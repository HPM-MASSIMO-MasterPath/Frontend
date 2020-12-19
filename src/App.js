import React from 'react';
import Layout from './layout/Layout.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import ChallengePage from './pages/challenge/ChallengePage.jsx';
import MyChallengesPage from './pages/myChallenges/MyChallengesPage.jsx';

import './assets/styles/components/App.scss';
import './assets/styles/components/Global.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/description/:id' component={ChallengePage} />
          <Route exact path='/myChallenges' component={MyChallengesPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
