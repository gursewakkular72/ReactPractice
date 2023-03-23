import React from "react";
import Profile from "./Profile";

const Page = (props) => {
  const { userName } = props;

  return <Profile {...{ userName }}></Profile>;
};

export default Page;
