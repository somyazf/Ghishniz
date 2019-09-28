import React, { Component } from "react";
const withTracker = (WrappedComponent, options = {}) => {

  // eslint-disable-next-line
  const HOC = (props) => <WrappedComponent {...props} />;
  return HOC;
};

export default withTracker;
