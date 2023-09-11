import React, { useState } from "react";
import Login from "./components/login";
import Logout from "./components/logout";
import { selectuser } from "./features/useslice";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector(selectuser);

  return <div>{user ? <Logout /> : <Login />}</div>;
};

export default App;
