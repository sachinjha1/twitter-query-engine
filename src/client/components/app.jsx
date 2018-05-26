import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './layout/header';
import Routes from '../routes/';


const App = () => (
  <div>
    <Header title="Twitter Query Engine" />
    <div>{renderRoutes(Routes)}</div>
  </div>
);

App.propTypes = {};

export default App;
