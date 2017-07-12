import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import {
  HomePage,
  MyPerformancesPage,
  ActorListPage,
  LoginPage,
  SignupPage,
  ActorProfilePage,
  NewPerformancePage,
  NotFoundPage,
} from 'pages';
import { Header, SnackBar } from 'components';
import { requireAuth } from 'hoc';

export default function Router() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/performances"
            component={requireAuth(MyPerformancesPage)}
          />
          <Route path="/actors/:id/" component={ActorProfilePage} />
          <Route path="/actors" component={ActorListPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/book/:id" component={requireAuth(NewPerformancePage)} />
          <Route component={NotFoundPage} />
        </Switch>
        <SnackBar />
      </div>
    </BrowserRouter>
  );
}
