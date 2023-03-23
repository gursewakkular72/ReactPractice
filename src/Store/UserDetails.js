import React, { createContext } from "react";

// createContext can take anything as arguments, but often its an object.
// It returns an object which contains component and that compoenet can be accessed using the "Provider"
const UserDetails = createContext({
  name: "Jones Smith",
  age: "29",
  location: "Burnaby",
});

export default UserDetails;
