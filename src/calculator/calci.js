import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let oper = ["+", "-", "*", "/", "%", "."];
export default function Calci() {
  const [state, setstate] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    const previousState = localStorage.getItem("user");
    setstate(previousState);
  }, []);
  useEffect(() => {
    localStorage.setItem("user", state);
  }, [state]);
  const keyss = (e) => {
    console.clear(e.key);
    const re = /^[0-9\b]+$/;
    if (e.key === "" || re.test(e.key)) {
      let inps = e.key.replace(/\D/g);
      setValue(inps);

      console.log(inps);
    }

    if (e.key === "Enter") {
      evalv();
    }
  };

  const inputs = (e) => {
    e.preventDefault();

    let val = state.split("");
    let inp = e.target.value;

    let vall = state;

    let last = val[val.length - 1];

    if (oper.includes(last) && oper.includes(inp)) {
      let valuu = val.slice(0, -1) + inp;
      let replac = valuu.replace(/,/g, "");

      // console.log(valuu);
      setstate(replac);
    } else {
      let states = val + inp;
      let replac = states.replace(/,/g, "");

      // console.log(states);
      setstate(replac);
    }
  };

  const evalv = () => {
    let val = state;
    try {
      let evl = eval(val).toString();
      setstate(evl);
    } catch (error) {
      // let vali = state.split("");
      // let last = vali.slice(0, -1);
      const removed = state.split(".")[0];
      const remove = removed.split("%")[0];

      let evl = eval(remove).toString();
      let replac = evl.replace(/,/g, "");

      setstate(replac);
      toast("enterd an wrond values", {
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const deletes = () => {
    setstate(state.slice(0, -1));
  };
  const clear = (e) => {
    console.log(e.target.value);
    setstate("");
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://cdn-media-2.freecodecamp.org/w1280/5f9ca22d740569d1a4ca5305.jpg")`,
        height: "554px",
        paddingTop: "0.1px",
      }}
    >
      <ToastContainer
        style={{
          bottom: "100em",
        }}
      />
      <div
        style={{
          width: "235px",
        }}
      >
        <h1
          style={{
            marginBottom: "5px",

            wordWrap: "break-word",
            wordBreak: "break-all",
            alignItems: "flex-end",
            backgroundColor: "grey",
            display: "flex",
          }}
          onKeyPress={(e) => keyss(e)}
          readOnly
        >
          {" "}
          {state || 0}
        </h1>
      </div>
      <div onClick={inputs}>
        {numbers.map((i) => (
          <button key={i} value={i}>
            {i}
          </button>
        ))}
      </div>
      <span onClick={inputs}>
        {oper.map((i) => (
          <button key={i} value={i}>
            {i}
          </button>
        ))}
      </span>{" "}
      <button onClick={evalv}>=</button>{" "}
      <button onClick={clear}>All Clear</button>
      <br></br>
      <button
        style={{
          marginLeft: "0px",
          marginTop: "1.5px",
          paddingLeft: "98px",
          paddingRight: "98px",
        }}
        onClick={deletes}
      >
        delete
      </button>
    </div>
  );
}
