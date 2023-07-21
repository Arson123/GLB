import React, { useState, useEffect } from "react";
import { CirclePicker } from "react-color";

const ColorPicker = ({ onColorsSelected }) => {
  const [selectedColors, setSelectedColors] = useState('blue');

  const handleColorChange = (color) => {
    setSelectedColors(color.hex);
  };

  useEffect(() => {
    // Llamar a la función de devolución de llamada en el padre con los colores seleccionados cada vez que cambien
    onColorsSelected(selectedColors);
  }, [selectedColors, onColorsSelected]);

  return (
    <div>
      <h2>Selector de Colores</h2>
      <CirclePicker onChange={handleColorChange} />
    </div>
  );
};

export default ColorPicker;