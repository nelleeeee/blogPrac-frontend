import React from "react";
import PropTypes from "prop-types";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import auth from "../Routes/auth";
import fullPost from "../Routes/fullPost";
import detailPost from "../Routes/detailPost";
import profile from "../Routes/profile";
import category from "../Routes/category";

const LoggedInRoutes = () => (
  <>
    <Route exact path="/" component={fullPost} />
  </>
);

const LoggedOutRoutes = () => (
  <>
    <Route exact path="/" component={fullPost} />
    <Route exact path="/login" component={auth} />
  </>
);

const AppRouter = ({ isLoggedIn }) => (
  <Router>
    <Switch> {isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />} </Switch>
  </Router>
);

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default AppRouter;
