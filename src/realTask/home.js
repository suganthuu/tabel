import { Link } from "react-router-dom";
import React from "react";
import { negative } from "../index";
import { useDispatch } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Dashboad component</h2>
      <Link to="/login">
        {" "}
        <button onClick={() => dispatch(negative())}>login</button>
      </Link>
    </div>
  );
};

export default Home;
