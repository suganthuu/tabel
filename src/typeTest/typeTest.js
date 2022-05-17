import React, { useCallback, useEffect, useRef, useState } from "react";
import "./type.css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Modal, Button } from "react-bootstrap";
const word =
  "Renouncing  belief@  doctrine-  believe abnegation  political power enhance power wealth  status  action intended  aggrandize  Frankish  dynasty Eagerness Example  accepted  invitation~  alacrity misplaced chronologically rebelling   According_ Martin Krzywinski Canadian specialist| bioinformatics these  standard QWERTY! keyboard pizazz piazzas pizzas suburban assuming# obstinance foramens tranquil* leather jacked showed  being favorite  those scars  pride& feeling  that they enhanced*  presence rather  diminishing  scars gave  character  overwhelmed point become$ ratty  jacket One morning elephant& pajamas pajamas complex houses married>  single soldiers  Buffalo buffalo+ families reponderance  sesquipedalian terminology, befuddles  infrequently  sentence structure containing this excessive vocabulary  sufficiently% uncomplicated intricate nested# clauses profoundly confusing instances<  would assume perhaps without adequate justification author understood precisely  intended communicate purpose  inventing Oxford English Dictionary described factitious= Nevertheless Webster Random Chambers$ dictionaries? Subsequently United/ States became allies  Great Britain  friendly relationship significant` result of women stepping supported plethora beneficial investment evidence diminutive footprints  converge Cohesion Coherence deliberative academic ";

export const TypeTest = () => {
  const [img, setImg] = useState("");

  const [scor, setScor] = useState(false);
  const [inpt, setInpt] = useState("");
  const [blue, setBlue] = useState(null);
  const [crt, setCrt] = useState([]); //correct word
  const [space, setSpace] = useState(null);
  const [fCount, setFCount] = useState(1); //index of current firstWd
  const [firstWord, setFirstWord] = useState("");
  const [texOut, setTexOut] = useState([]); // left side //read only
  const [sec, setSec] = useState();
  const [startt, setStart] = useState(); // counter start
  const [counter, setCounter] = React.useState("0");
  const [words, setwords] = useState(0); // wpm
  const [chars, setChars] = useState(0); //cpm
  const [accuracy, setAccuracy] = useState(100);
  const [text, setText] = useState("");
  const [acc, setAcc] = useState(0); // space click for accuracy
  const [t1, setT1] = useState({ cpm: "0", wpm: "0", acc: "0" });
  const [t2, setT2] = useState({ cpm: "0", wpm: "0", acc: "0" });
  const [t3, setT3] = useState({ cpm: "0", wpm: "0", acc: "0" });

  function find(r) {
    if (r == "a") {
      return "";
    }
    if (r == "b") {
      return "";
    }
    if (r == "c") {
      return "";
    }
    if (r == "d") {
      return "";
    }
    if (r == "e") {
      return "";
    }
    if (r == "f") {
      return "";
    }
    if (r == "g") {
      return "";
    }
    if (r == "h") {
      return "";
    }
    if (r == "i") {
      return "";
    }
    if (r == "j") {
      return "";
    }
    if (r == "k") {
      return "";
    }
    if (r == "l") {
      return "";
    }
    if (r == "m") {
      return "";
    }
    if (r == "n") {
      return "";
    }
    if (r == "o") {
      return "";
    }
    if (r == "p") {
      return "";
    }
    if (r == "q") {
      return "";
    }
    if (r == "r") {
      return "";
    }
    if (r == "s") {
      return "	https://typingtestnow.com/images/finger-indicator/ring-finger-left.png?id=788";
    }
    if (r == "t") {
      return "";
    }
    if (r == "u") {
      return "";
    }
    if (r == "v") {
      return "";
    }
    if (r == "w") {
      return "";
    }
    if (r == "x") {
      return "";
    }
    if (r == "y") {
      return "";
    }
    if (r == "z") {
      return "";
    }
  }

  React.useEffect(() => {
    const previousState = localStorage.getItem("T1"); //top score set to local storage
    if (previousState) {
      setT1(JSON.parse(previousState));
    }
  }, []);
  React.useEffect(() => {
    localStorage.setItem("T1", JSON.stringify(t1));
  }, [t1]);
  //-

  React.useEffect(() => {
    const previousState = localStorage.getItem("T2");
    if (previousState) {
      setT2(JSON.parse(previousState));
    }
  }, []);
  React.useEffect(() => {
    localStorage.setItem("T2", JSON.stringify(t2));
  }, [t2]);
  //

  React.useEffect(() => {
    const previousState = localStorage.getItem("T3");
    if (previousState) {
      setT3(JSON.parse(previousState));
    }
  }, []);
  React.useEffect(() => {
    localStorage.setItem("T3", JSON.stringify(t3));
  }, [t3]);

  if (startt === true) {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }
  useEffect(() => {
    if (startt === true) {
      setCounter(60);
      setTimeout(() => {
        setSec(true);
      }, 60000);
    }
  }, [startt]);

  const escFunction = useCallback((event) => {
    if (event.code === "Space") {
      setSpace(true);
      setAcc(acc + 1);
    } else {
      setSpace(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction);

    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, []);
  useEffect(() => {
    if (chars > t1.cpm) {
      setT1({ ...t1, cpm: chars, wpm: words, acc: accuracy }); //10
    }
    //
    if (chars > t2.cpm && chars < t1.cpm && t2.cpm < t1.cpm) {
      setT2({ ...t2, cpm: chars, wpm: words, acc: accuracy }); //8
    }
    //
    if (chars > t3.cpm && chars < t2.cpm && chars < t1.cpm && t2.cpm < t1.cpm) {
      setT3({ ...t3, cpm: chars, wpm: words, acc: accuracy }); //6
    }
  }, [sec]);

  const tryAgain = () => {
    // set to local storage here cpm wpm acc // accuracy  chars words
    setSec(false);
    setStart(false);
    setText("");
    setInpt("");
    setChars(0);
    setwords(0);
    setCounter(0);
    setAccuracy(0);
  };
  const start = () => {
    setStart(true);
  };

  useEffect(() => {
    let a = word.match(/\b(\w+)\b/g);
    let b = a.sort(() => Math.random() - 0.5);
    setText(b);
    setFirstWord(b[0]);
    setTexOut([""]);
  }, [sec]);
  // useEffect(() => {
  //   let result = 100 / fCount - 1;
  //   console.log(result);
  //   console.log(words);
  //   console.log(fCount);
  //   let accc = result * words + 1;
  //   setAccuracy(accc);
  // }, [fCount]);

  const firstOnchange = (e) => {
    let val = e.target.value;

    if (space === true && inpt !== "") {
      const result = (words / fCount) * 100;
      setAccuracy(Math.trunc(result));
      setFCount(fCount + 1); /// word index count
      setFirstWord(text[fCount]);
      if (text[fCount - 1] === texOut[1]) {
        setCrt([
          texOut
            .toString()
            .split(" ")
            .pop(),
        ]);
      }
    }
    setInpt(val);
    let length = val.length; // get letters usigh length of val and compare that with tex
    let slic = firstWord.slice(0, length);
    if (slic === val && space === true) {
    }
    if (slic === val) {
      if (space === true && inpt !== "") {
        setChars(chars + val.length);
        setwords(words + 1);
      }
      setBlue(true);
    } else {
      setBlue(false);
    }
    // if (baclsp === true) {
    //   let include = firstWord.slice(1);
    // }
    if (texOut.length === 0) {
      //detect space and save to left state
      setInpt("");
      setTexOut([val]);
    }
    if (space && texOut.length !== 0) {
      setInpt("");
      setTexOut([texOut + val]);
    }
    if (texOut.length !== 0 && texOut[0].length > 20) {
      var str = texOut.toString();
      var mySplitResult = str.split(" ");
      var lastWord = mySplitResult[mySplitResult.length - 1];
      setTexOut([lastWord + " "]);
    }
  };

  const ref = useRef(null);
  const refss = () => {
    ref.current.focus();
  };
  return (
    <div>
      <p>TYPING SPEED TEST</p>
      <h1>Test your typing skills</h1>
      <Modal show={sec === true && true} animation={false}>
        <Modal.Body>
          {" "}
          <p>Nice! You type with the speed of </p>
          <p>
            {words} wpm ( {chars}cpm ) your accuracy
          </p>
          <p>was {accuracy}%. Keep practicing!</p>
          <p>TYPING SPEED TEST</p>{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={tryAgain}>
            Try again
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="counter" style={{ width: 100, height: 100 }}>
        <CircularProgressbar
          value={counter}
          maxValue={60}
          strokeWidth={5}
          text={startt !== true ? "60" : counter}
          styles={buildStyles({
            textColor: "red",
            pathColor: "gold",
            trailColor: "grey",
          })}
        />{" "}
        <img
          style={{ width: 35, marginTop: -100 }}
          src="https://i.imgur.com/b9NyUGm.png"
        />
      </div>
      <div className="tot">
        <div className="alls">
          <span className="sec">{words}</span> <br></br>
          <span className="text2">words/min</span>
        </div>
        <div className="alls">
          <span className="sec">{chars}</span> <br></br>
          <span className="text2">chars/min</span>
        </div>
        <div className="alls">
          <span className="sec">{accuracy}%</span> <br></br>
          <span className="text2">accuracy</span>{" "}
        </div>
      </div>{" "}
      <button className="top-scores" onClick={() => setScor(true)}>
        Top scores &#8675;
      </button>
      <div onClick={refss} className="full-input" onKeyDown={start}>
        <div style={{ width: "50%", backgroundColor: "white" }}>
          {" "}
          {texOut.map((i) => (
            <span
              key={i.length + 10}
              className="word-out"
              style={{
                color: "lightslategray",
              }}
            >
              {i}
            </span>
          ))}
        </div>
        <div style={{ width: "50%", backgroundColor: "white" }}>
          <input
            ref={ref}
            autoFocus={true}
            spellCheck="false"
            style={{
              color: blue && "blue",
              textDecoration: blue === false ? "line-through" : "",
            }}
            onKeyPress={firstOnchange}
            onChange={firstOnchange}
            value={inpt}
          />{" "}
          <span style={{ backgroundColor: "white" }}>{firstWord}</span>
        </div>
      </div>{" "}
      <div onClick={refss} class="hotspot">
        <div class="hotspot-inner"> Start&nbsp;typing</div>
      </div>
      <Modal show={scor} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title> Top 3 Scores by cpm </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ fontSize: "15px", fontWeight: "550" }}>
          <ul style={{ paddingLeft: "70Px", marginTop: "10px" }}>
            <li>
              1. cpm {t1.cpm}&nbsp; wpm {t1.wpm}&nbsp; accuracy {t1.acc}%
            </li>{" "}
            <li>
              2. cpm {t2.cpm}&nbsp; wpm {t2.wpm}&nbsp; accuracy {t2.acc}%
            </li>{" "}
            <li>
              3. cpm {t3.cpm}&nbsp; wpm {t3.wpm}&nbsp; accuracy {t3.acc}%
            </li>{" "}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setScor(false)}>
            ok
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="hands">
        <img src="https://typingtestnow.com/images/finger-indicator/middle-finger-right.png?id=788" />
      </div>
    </div>
  );
};
