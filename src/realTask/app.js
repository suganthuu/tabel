import React, { useEffect, useState } from "react";
import Login from "./login";
import Home from "./home";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Apps = () => {
  const counter = useSelector((state) => state);

  console.log(counter);

  return (
    <div>
      <Routes>
        {!counter && <Route exact path={"/login"} element={<Login />} />}
        {counter && <Route exact path={"/home"} element={<Home />} />}
        <Route exact path="*" element={counter ? <Home /> : <Login />} />{" "}
      </Routes>
    </div>
  );
};

export default Apps;
