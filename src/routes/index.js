import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Button from '../components/Button';

export const routes = {
  Components: '/',
  Button: '/button'
};

export default function Routes() {
  return (
    <Switch>
      <Route path={routes.Button} component={Button} />
    </Switch>
  );
}
