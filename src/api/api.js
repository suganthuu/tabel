import React, { useEffect, useState } from "react";
import axios from "axios";
import "./api.css";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
export default function Api() {
  const [vald, setVald] = useState(false);
  const [emailError, setEmailError] = useState("");

  const [ubda, setUbda] = useState({ id: "", fname: "", lname: "", email: "" });
  const [crea, setCrea] = useState({
    fname: "",
    lname: "",
    email: "",
  });
  const [get, setget] = useState([]);
  const [data, setData] = useState(false);

  const [ok, setok] = useState(false);
  const [edits, setEdits] = useState({ edit: false, create: false });

  const getData = () => {
    setEdits({ create: false });

    {
      ok ? setok(false) : setok(true);
    }
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((res) => {
        setget(res.data.data);
        setData(true);
      })
      .catch((error) => {
        console.log("cant get data");
      });
  };
  const deleted = (i) => {
    delteOk();
    const ar = get.filter((a) => a.id !== i);

    axios
      .delete(`https://reqres.in/api/users/${i}`)
      .then((response) => {
        console.log("then called");
        setget(get.filter((a) => a.id !== i));
      })
      .catch((error) => {
        console.log("catch called", error);
        notifyErr(i, error);
      });
  };
  const delteOk = (i) => toast(`deleted sucessfully`);

  const ubdateOk = (i) => toast(`ubdated sucessfully`);
  const notifyErr = (i, error) =>
    toast(
      `error while deleting ${get[i - 1].first_name} ${get[i - 1].last_name}`
    );

  const edit = (i) => {
    //to display data
    setEdits({ edit: true });
    setUbda((p) => {
      return { ...p, fname: get[i - 1].first_name };
    });
    setUbda((p) => {
      return { ...p, lname: get[i - 1].last_name };
    });
    setUbda((p) => {
      return { ...p, email: get[i - 1].email };
    });
    setUbda((p) => {
      return { ...p, id: i };
    });
  };
  const saveUbdate = (e) => {
    setUbda((p) => {
      // to save edited
      return { ...p, [e.target.name]: e.target.value };
    });
  };
  const editSave = () => {
    // to ubdate api

    if (((ubda.fname, ubda.lname), ubda.email)) {
      setEmailError("");
      if (ubda.email.includes("@" || ".")) {
        setEmailError("");
        setCrea({ lname: "" });
        setEdits({ edit: false });
        let datas = {
          first_name: ubda.fname,
          last_name: ubda.lname,
          email: ubda.email,
        };
        axios
          .put(`https://reqres.in/api/users/${ubda.id}`, JSON.stringify(datas))
          .then((response) => ubdateOk());
        setEmailError("");
      } else {
        setEmailError("Enter valid Email!");
      }
    } else {
      setEmailError("fill all fields");
    }
  };
  const createnew = () => {
    if (((crea.fname, crea.lname), crea.email)) {
      setEmailError("");
      if (crea.email.includes("@" || ".")) {
        setEmailError("");
        setCrea({ lname: "" });
        setEdits({ create: false });
        let datas = {
          first_name: crea.fname,
          last_name: crea.lname,
          email: crea.email,
        };
        axios
          .post("https://reqres.in/api/users", JSON.stringify(datas))
          .then((response) => createOk());
        setEmailError("");
      } else {
        setEmailError("Enter valid Email!");
      }
    } else {
      setEmailError("fill all fields");
    }
  };

  const create = (e) => {
    if (e.key === "Enter") {
      console.log("do validate");
    }
    setEdits({ create: true });
    // {
    //   e.target.value !== "" &&
    setCrea((p) => {
      setok(false);
      return { ...p, [e.target.name]: e.target.value };
    });
    // }
  };

  const createOk = () => toast(`new data created sucessfully`);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      createnew();
    }
  };

  return (
    <div>
      {edits.edit && (
        <div
          className="model"
          style={{ display: "block", width: 700, padding: 30 }}
        >
          <Modal.Dialog>
            <Modal.Header
              closeButton
              onClick={() => setEdits({ create: true })}
            >
              <Modal.Title>Fill this to ubdate</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <label>first nam:</label>
              <input
                name="fname"
                onChange={saveUbdate}
                placeholder="enter first name"
                value={ubda.fname}
              />
              <br></br> <br></br>
              <label>last name:</label>
              <input
                name="lname"
                onChange={saveUbdate}
                placeholder="enter last name"
                value={ubda.lname}
              />
              <br></br> <br></br>
              &nbsp;&nbsp;&nbsp; {"  "}&nbsp; <label>email :</label>
              <input
                name="email"
                onChange={saveUbdate}
                placeholder="enter email"
                value={ubda.email}
              />
              <div
                style={{
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                {emailError}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={editSave}>
                Save changes
              </Button>
              <Button
                variant="secondary"
                onClick={() => setEdits({ create: true })}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      )}
      <h3 className="buttons" onClick={create}>
        create
      </h3>

      {edits.create && (
        <div
          onKeyDown={handleKeyDown}
          className="model"
          style={{ display: "block", width: 700, padding: 30 }}
        >
          <Modal.Dialog>
            <Modal.Header closeButton onClick={() => setEdits({ edit: false })}>
              <Modal.Title>Fill this to create id</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <label>first Name:</label>
              <input
                onChange={create}
                name="fname"
                placeholder="enter first name"
                value={crea.fname}
              />
              <br></br> <br></br> &nbsp;&nbsp;
              <label>last Name:</label>
              <input
                id="myInput"
                onChange={create}
                name="lname"
                placeholder="enter last name"
                value={crea.lname}
              />
              <br></br> <br></br>
              &nbsp;&nbsp;&nbsp; &nbsp;{"  "}&nbsp; <label>email :</label>
              <input
                type="text"
                onChange={create}
                name="email"
                placeholder="enter email"
                value={crea.email}
              />
              <div
                style={{
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                {emailError}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={createnew}>
                Save changes
              </Button>
              <Button
                variant="secondary"
                onClick={() => setEdits({ edit: false })}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      )}
      <ToastContainer />
      <h3 className="buttons" onClick={getData}>
        {" "}
        get
      </h3>
      {data === true && ok
        ? get.map((i) => (
            <div key={i.id + 1} className="parent">
              <img src={i.avatar} />{" "}
              <button className="buttons_map" onClick={() => edit(i.id)}>
                edit
              </button>
              <button className="buttons_map" onClick={() => deleted(i.id)}>
                delete
              </button>
              <span>
                username:{i.first_name}&nbsp;
                {i.last_name}
              </span>
              <br></br>
              <span>email:{i.email}</span>
            </div>
          ))
        : ""}
    </div>
  );
}
