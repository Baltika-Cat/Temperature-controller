import React from "react";
import { useState } from "react";

export const TemperatureController = () => {
  const startRed = 124;
  const startBlue = 132;
  const [temperature, setTemperature] = useState(0);
  const [color, setColor] = useState(`#${startRed.toString(16)}00${startBlue.toString(16)}`);
  const [message, setMessage] = useState({
    text: '',
    color: '',
  });

  const increment = () => {
    if (temperature < 32) {
      setTemperature(temperature + 1);
      const currentRed = parseInt(color.slice(1, 3), 16);
      const currentBlue = parseInt(color.slice(-2), 16);
      setColor(`#${(currentRed + 4).toString(16).padStart(2, '0')}00${(currentBlue - 4).toString(16).padStart(2, '0')}`);
      setMessage({text: '', color: ''});
    } else {
      setMessage({text: 'This is the maximum temperature!', color: 'red'});
    }
  }

  const decrement = () => {
    if (temperature > -30) {
      setTemperature(temperature - 1);
      const currentRed = parseInt(color.slice(1, 3), 16);
      const currentBlue = parseInt(color.slice(-2), 16);
      setColor(`#${(currentRed - 4).toString(16).padStart(2, '0')}00${(currentBlue + 4).toString(16).padStart(2, '0')}`);
      setMessage({text: '', color: ''});
    } else {
      setMessage({text: 'This is the minimum temperature!', color: '#0000ff'});
    }
  }
  return (
    <div className="general-container">
      <div className="temperature-table" style={{backgroundColor: color}}>{`${temperature}\u2103`}</div>
      <div className="message" style={{color: message.color}}>{message.text}</div>
      <div className="buttons-container">
        <button className="button" onClick={decrement} style={{backgroundColor: "blue"}}>-</button>
        <button className="button" onClick={increment} style={{backgroundColor: "red"}}>+</button>
      </div>
    </div> 
  )
}