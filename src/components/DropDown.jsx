import React from 'react';

const Dropdown = ({ onSelect }) => {
  const handleSelect = (event) => {
    const selectedValue = event.target.value;
    onSelect(selectedValue);
  };

  return (
    <select onChange={handleSelect}>
      <option value="1">Pared 1</option>
      <option value="2">Pared 2</option>
      <option value="3">Pared 3</option>
      <option value="4">Pared 4</option>
      <option value="5">Pared 5</option>
    </select>
  );
};

export default Dropdown;
