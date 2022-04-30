import React, { useEffect } from "react";
import "./table.css";
// let period = ["Days", "1", "2", "3", "4", "5"];
let period = ["Days", "1", "2", "3", "4", "5"];

let subject = [" tamil", " english", " math", " science", " social science"];
let day = [" mon", " tue", " wed", " thu", " fri", " sat"];
export default function Table() {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     window.location.reload();
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <div className="back bak">
      <video className="video" autoPlay loop muted>
        <source
          src={
            "https://cdn.videvo.net/videvo_files/video/free/2016-03/large_watermarked/Hologram_Planet_by_nuva_preview.mp4"
          }
          type="video/mp4"
        />
      </video>
      <div
        style={{
          color: "red",
          marginLeft: "auto",
          marginRight: "auto",
          width: "60%",
        }}
      >
        <h2
          style={{
            color: "violet",
            marginLeft: "30%",
          }}
        >
          school Table
        </h2>
        <tr>
          {period.map((i) => (
            <td key={i} className="peri-od">
              {" "}
              <span className="space"> {i}</span>
            </td>
          ))}
        </tr>
        <table>
          <tbody>
            {day.map((i) => (
              <tr className="day-space" key={i}>
                <span className="day">{i}</span>
                <td className="subject">
                  {subject
                    .sort(() => Math.random() - 0.5)
                    .map((i) => (
                      <span key={i} className="sub-border">
                        {i}
                      </span>
                    ))}
                </td>
              </tr>
            ))}
            <tr
              style={{
                color: "skyblue",
                textAlign: "center",
              }}
            >
              sunday
              <td
                style={{
                  color: "grey",
                  textAlign: "center",
                  paddingRight: "100px",
                  fontSize: "20px",
                }}
              >
                Do home work
              </td>
            </tr>
          </tbody>
        </table>
        <button className="abc" onClick={() => window.location.reload("pannu")}>
          Click to reload!
        </button>
      </div>
    </div>
  );
}
