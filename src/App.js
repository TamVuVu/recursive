import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [initArray, setInitArray] = useState("")
  const [reOrderedArray, setReOrderedArray] = useState("")

  function recursive(arr, index, odd, even) {
    if (index >= arr.length) {
      let recursived = [...odd.concat(even)]
      setReOrderedArray(recursived.toString())
      return
    }
    else {
      if (arr[index] % 2 !== 0) {
        odd.push(arr[index])
      }
      else if (arr[index] % 2 === 0) {
        even.push(arr[index])
      }
    }
    index++
    recursive(arr, index, odd, even)
  }
  function onSubmit(arr) {
    let newArr = arr.split(",")
    let odd = []
    let even = []
    recursive(newArr, 0, odd, even)
  }

  return (
    <div className="App">
      <h1>Recursive</h1>
      <div>
        <form>
          <label>Input (number only)</label>
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
      <div>
        <textarea disabled
          value={reOrderedArray}>
        </textarea>
      </div>
    </div>
  );
}

export default App;
