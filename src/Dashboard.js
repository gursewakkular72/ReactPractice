import React from "react";
import Main from "./Main";
import SideNav from "./SideNav";

const Dashboard = (props) => {
  const { id, userName, title } = props;
  console.log(id);
  console.log(userName);
  return (
    <div>
      <SideNav {...{ id }}></SideNav>
      <Main title={title} userName={userName}></Main>
    </div>
  );
};

export default Dashboard;
