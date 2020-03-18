import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Button from '../components/Button';
import Typography from '../components/Typography';
import Card from '../components/Card';

export const routes = {
  Button: '/button',
  Typography: '/typography',
  Card: '/card'
};

export default function Routes() {
  return (
    <Switch>
      <Route path={routes.Button} component={Button} />
      <Route path={routes.Typography} component={Typography} />
      <Route path={routes.Card} component={Card} />
    </Switch>
  );
}
