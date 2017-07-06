import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import {
  HomePage,
  MyEventsPage,
  ArtistListPage,
  LoginPage,
  SignupPage,
  ArtistProfilePage,
  NewEventPage,
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
          <Route path="/events" component={requireAuth(MyEventsPage)} />
          <Route path="/artists/:id/" component={ArtistProfilePage} />
          <Route path="/artists" component={ArtistListPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/book/:id" component={NewEventPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <SnackBar />
      </div>
    </BrowserRouter>
  );
}
