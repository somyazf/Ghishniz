import React, { Component } from "react";

GoogleAnalytics.initialize(process.env.REACT_APP_GAID || "UA-115105611-2");
const withTracker = (WrappedComponent, options = {}) => {

  // eslint-disable-next-line
  const HOC = (props) => <WrappedComponent {...props} />;


  return HOC;
};

export default withTracker;
