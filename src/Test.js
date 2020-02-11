import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProfile } from "hybrid-shared-redux/dist/actions/profile";

const Test = ({ getPro, data = {} }) => {
  useEffect(() => {
    getPro();
  }, []);
  return <div>title is {data.title}</div>;
};

export default connect(
  ({ profile }) => ({
    data: profile.data.profile
  }),
  { getPro: getProfile }
)(Test);
