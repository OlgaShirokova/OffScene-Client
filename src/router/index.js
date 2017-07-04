import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import {
  HomePage,
  MyEventsPage,
  ArtistListPage,
  LoginPage,
  SignupPage,
  ArtistProfilePage,
  NewEventPage,
} from 'pages';
import { Header } from 'components';

export default function Router() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Switch>
          <Route path="/events" component={MyEventsPage} />
          <Route path="/artists/:id/" component={ArtistProfilePage} />
          <Route path="/artists" component={ArtistListPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/book/:id" component={NewEventPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
