import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './layout/header';
import Routes from '../routes/';
import { title } from '../../../config'

const App = () => (
  <div>
    <Header title={title} />
    <div>{renderRoutes(Routes)}</div>
  </div>
);

App.propTypes = {};

export default App;
