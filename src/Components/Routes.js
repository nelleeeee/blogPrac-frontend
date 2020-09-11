import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import Auth from "../Routes/Auth";
import fullPost from "../Routes/fullPost";
import detailPost from "../Routes/detailPost";
import category from "../Routes/category";
import search from "../Routes/search";

const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={fullPost} />
    <Route path="/search" component={search} />
    <Route path="/:postTitle" component={detailPost} />
    <Route path="/:category" component={category} />
  </Switch>
);

const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/" component={fullPost} />
    <Route exact path="/login" component={Auth} />
    <Route path="/search" component={search} />
    <Route path="/:postTitle" component={detailPost} />
    <Route path="/:category" component={category} />
  </Switch>
);

const AppRouter = ({ isLoggedIn }) =>
  isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default AppRouter;
