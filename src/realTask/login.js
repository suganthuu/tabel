import React from "react";
import { positive } from "../index";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Login = ({ loginOk }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>login component</h2>
      <Link to="/home">
        {" "}
        <button onClick={() => dispatch(positive())}>login</button>
      </Link>
    </div>
  );
};

export default Login;
