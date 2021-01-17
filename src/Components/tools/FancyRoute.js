import React from 'react';
import { Route } from 'react-router-dom';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import './FancyRoute.css'

const FancyRoute = (props) => {
  React.useEffect(() => {
    nprogress.done();
  });

  nprogress.start();
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...props} />;
};

export default FancyRoute;