import React from 'react';
import Layout from './layout/Layout.jsx'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import './assets/styles/components/App.scss';
import './assets/styles/components/Global.scss';
import Layout from './layout/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
