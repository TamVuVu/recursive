import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [initArray, setInitArray] = useState("")
  const [reOrderedArray, setReOrderedArray] = useState("")

  function recursive(arr, i, temp) {
    if (arr.length % 2 == 0)
      temp = arr.length / 2;
    else
      temp = (arr.length / 2) - 1;
    if (i >= temp) {
      setReOrderedArray(arr);
    }
    else {
      i++;
      arr.push(arr[i]);
      arr.splice(i, 1);
      recursive(arr, i, temp);
    }
  }
  function onSubmit(arr) {
    let newArr = arr.split(",")
    recursive(newArr, 0, 0)
  }
  return (
    <div className="App">
      <h1>Recursive</h1>
      <div>
        <form>
          <label>Input (number only, seperated by comma)</label>
          <br />
          <textarea value={initArray}
            onChange={(e) => {
              setInitArray(e.target.value)
            }}></textarea>
          <br />
          <input type="button" value="REORDER" onClick={() => {
            onSubmit(initArray)
          }}></input>
        </form>
      </div>
      <br />
      <div>
        <textarea disabled
          value={reOrderedArray}>
        </textarea>
      </div>
    </div>
  );
}

export default App;
