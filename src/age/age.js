import React, { useState } from "react";

export default function Age() {
  const [date, setDate] = useState(" ");
  const [dates, setDates] = useState(" ");

  console.log(date);
  let split = date.split("-");
  let year = split[0];
  let month = split[1];
  let day = [2];
  let a = new Date(month + "/" + day + "/" + year);

  let monthDiff = Date.now() - a.getTime();
  let ageDate = new Date(monthDiff);
  let years = ageDate.getUTCFullYear();
  var age = Math.abs(years - 1970); //math .abs=difrence between values
  function submitButt() {
    setDates(age);
  }

  const get = (e) => {
    setDate(e.target.value);
  };

  console.log();
  return (
    <div>
      <input type="date" onChange={get} />
      <button type="submit" onClick={submitButt}>
        {" "}
        submit
      </button>
      <h1>{dates}</h1>
    </div>
  );
}
