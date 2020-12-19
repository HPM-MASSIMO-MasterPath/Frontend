import React from 'react';
import Layout from './layout/Layout.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Login from './components/Login/Login.jsx';
import ChallengePage from './pages/challenge/ChallengePage.jsx';
import MyChallengesPage from './pages/myChallenges/MyChallengesPage.jsx';
import StatisticsPage from './pages/statistics/StatisticsPage.jsx';

import './assets/styles/components/App.scss';
import './assets/styles/components/Global.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/home' component={HomePage} />
          <Route
            exact
            path='/challengeDescription/:id'
            component={ChallengePage}
          />
          <Route exact path='/myChallenges' component={MyChallengesPage} />
          <Route exact path='/statistics' component={StatisticsPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
