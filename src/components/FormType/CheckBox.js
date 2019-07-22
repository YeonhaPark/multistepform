import React from "react";

const Checkbox = ({ item, handleChange }) => (
  <li className="list">
    <label className="checkboxContainer">
      {item.text}
      <input
        type="checkbox"
        value={item.text}
        name="1"
        onChange={handleChange}
        defaultChecked={item.selected}
      />
      <span className="checkmark" />
    </label>
  </li>
);

export default Checkbox;
