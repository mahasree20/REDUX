import React from "react";
import "./logout.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/useslice";
import { selectuser } from "../features/useslice";

const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectuser);
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <div className="logout">
      <h1>
        Welcome <span className="user-name">{user.name}</span>
      </h1>
      <button className="logout_button" onClick={(e) => handleLogout(e)}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
