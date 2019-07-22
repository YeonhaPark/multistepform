import React from "react";

const Selectbox = ({ item }) => (
  <option value={item.id}>
    {item.text}
  </option>
);

export default Selectbox;
