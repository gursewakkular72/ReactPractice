import React, { useContext } from "react";
import UserDetails from "./Store/UserDetails";

const Profile = (props) => {
  const ctx = useContext(UserDetails);
  return <div>{ctx.name}</div>;
};

export default Profile;
