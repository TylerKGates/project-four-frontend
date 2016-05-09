import React from 'react';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import Main from '../components/Main';
import HomePage from '../containers/HomePage';
import ArkhamKnightPage from '../containers/ArkhamKnightPage';
import CsGoPage from '../containers/CsGoPage';
import LeagueOfLegendsPage from '../containers/LeagueOfLegendsPage';
import NewPostForm from '../containers/NewPostForm';

const routes = (
  <Router history={hashHistory}>
  <Route path='/' component={Main}>
  <IndexRoute component={HomePage} />
  <Route path='HomePage' component={HomePage} />
  <Route path='ArkhamKnightPage' component={ArkhamKnightPage} />
  <Route path='CsGoPage' component={CsGoPage} />
  <Route path='LeagueOfLegendsPage' component={LeagueOfLegendsPage} />
  <Route path='NewPostForm' component={NewPostForm} />
  </Route>
  </Router>
)

export default routes;
