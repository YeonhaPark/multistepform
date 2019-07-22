import React from 'react';

const Radio = ({ item, handleChange }) => (
  <li className="list">
    <label className="radioContainer">{item.text}
      <input
        type="radio"
        value={item.id}
        name="radio"
        defaultChecked={item.selected}
        onChange={handleChange}/>
      <span className="circle" />
    </label>
  </li>
);

export default Radio;
