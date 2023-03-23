import React from "react";
import TopNav from "./TopNav";
import Page from "./Page";

const Main = (props) => {
  const { title, userName } = props;
  console.log(props);

  return (
    <div>
      <TopNav {...{ title }}></TopNav>
      <Page {...{ userName }}></Page>
    </div>
  );
};

export default Main;
