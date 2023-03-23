import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Dashboard from "./Dashboard";
import UserDetails from "./Store/UserDetails";
// import { Reducer } from "./Reducer";

function App() {
  const [title, setTitle] = useState("Home");
  const [userName, setUserName] = useState("John Doe");
  const [id, setId] = useState("123");

  return (
    <div className="App">
      <h1>Hello World</h1>
      <UserDetails.Provider
        value={{
          name: "Jones Smith",
          age: "29",
          location: "Burnaby",
        }}
      >
        <Dashboard {...{ title, userName, id }}></Dashboard>
      </UserDetails.Provider>

      {/* To reducer in action, un-comment the following line */}
      {/* <Reducer></Reducer> */}
    </div>
  );
}

export default App;
