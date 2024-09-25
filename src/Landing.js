import React, { useState } from "react";
import './assets/styles/landing.css';

const Landing = () => {
  const Radio = ({value, checked, setter}) => {
    return(
      <label className="radio">
        <input
          type="radio"
          checked={checked == value}
          onChange={() => setter(value)}
        />
        <h1>{value}</h1>
      </label>
    )
  }

  const [row1, setRow1] = useState();
  const [row2, setRow2] = useState();
  const [row3, setRow3] = useState();
  const [row4, setRow4] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {row1, row2, row3, row4};
    const json = JSON.stringify(data, null, 4);
    console.clear();
    console.log(json);
  }

  return(
    <form onSubmit={handleSubmit}>
      <div className="row1">
        <Radio value="1" checked={row1} setter={setRow1}/>
        <Radio value="2" checked={row1} setter={setRow1}/>
        <Radio value="3" checked={row1} setter={setRow1}/>
      </div>
      <div className="row2">
        <Radio value="1" checked={row2} setter={setRow2}/>
        <Radio value="2" checked={row2} setter={setRow2}/>
        <Radio value="3" checked={row2} setter={setRow2}/>
      </div>
      <div className="row3">
        <Radio value="1" checked={row3} setter={setRow3}/>
        <Radio value="2" checked={row3} setter={setRow3}/>
        <Radio value="3" checked={row3} setter={setRow3}/>
      </div>
      <div className="row4">
        <Radio value="1" checked={row4} setter={setRow4}/>
        <Radio value="2" checked={row4} setter={setRow4}/>
        <Radio value="3" checked={row4} setter={setRow4}/>
      </div>
      <button type="submit">get</button>
    </form>
  )
};

export default Landing;