import React, { useState } from "react";
// find palindrome(reverse and compare or)
export const LetsCode = () => {
  const code = () => {
    //   let x = 11;
    //   let y = x.toString();
    //   let v = y.split();
    //   let z = y.length;
    //   if (z % 2 == 0) {
    //     const arr = Array.from(String(x), Number);
    //     const list = arr;
    //     const half = Math.ceil(list.length / 2);
    //     const f = list
    //       .splice(0, half)
    //       .reverse()
    //       .toString();
    //     const s = list.splice(-half).toString();
    //     if (f === s) {
    //       return console.log(true);
    //     }
    //   }
    //   if (z % 2 !== 0) {
    //     const arr = Array.from(String(x), Number);
    //     const list = arr;
    //     const half = Math.ceil(list.length / 2);
    //     const f = list
    //       .splice(0, half - 1)
    //       .reverse()
    //       .toString();
    //     const s = list.splice(-half + 1).toString();
    //     if (f === s) {
    //       return console.log(true);
    //     }
    //   } else {
    //   }
    //   return console.log(false);
    //---------------------------------------------------------------------------------------------------
    //   let x = 11;
    //   let str = x.toString();
    //   let a = str.split("");
    //   let l = a.length;
    //   let rValue = false;
    //   for (let i = 0; i < a.length; i++) {
    //     let y = a[l - 1 - i];
    //     let z = a[i];
    //     if (y === z) {
    //       rValue = true;
    //     } else {
    //       rValue = false;
    //       break;
    //     }
    //   }
    //   return console.log(rValue);
    //_____________________________________________________find prefix
    let ary = ["flower", "flow", "flight"];
    let strs = ary;
    for (let i = 0; i < strs.length; i++) {
      for (let j = 0; j < strs.length; j++) {
        if (strs[i][j] == strs[i + 1][j]) {
          console.log([i], [j]);
        } else {
          console.log("");
        }
      }
    }

    //___________________________________________________________________________________________
  };

  return (
    <div>
      <button onClick={code}>click</button>
    </div>
  );
};
