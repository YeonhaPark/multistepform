import React from "react";

const Text = props => {
  return (
    <div>
      <input
        className="textBox"
        onChange={props.handleChange}
        type="text"
        name="text"
        defaultValue={props.text}
      />
    </div>
  );
};

export default Text;
