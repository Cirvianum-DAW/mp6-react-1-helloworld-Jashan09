import React from "react";
import { useState } from "react";
import Form from "./components/Form";

function App() {

  const [ngPlaces, setNGPlaces] = useState(60);
const [gPlaces, setGPlaces] = useState(40);

  const [tipusEstudiant, setTipusEstudiant] = useState("No Graduat");
  const handleChange = (e) => {
    setTipusEstudiant(e.target.value);
  };
  // Afegim la funció que actualitza el valor de la variable d'estat places
  const setPlacesDisponibles = (updatedPlaces) => {
    tipusEstudiant === "No Graduat"
      ? setNGPlaces(updatedPlaces)
      : setGPlaces(updatedPlaces);
  };
  
  return (
    <div className="flex flex-col items-center justify-center gap-5 h-screen">
      <div className="tipusEstudiant">

{/* This is a comment */}

        <label className="text-2xl text-center mx-2 block">
          Places Disponibles No Graduats: {ngPlaces}
          <br />
          Places Disponibles Graduats: {gPlaces}
        </label>
        <label className="text-2xl mx-2">Selecciona Tipus del Estudiant:</label>
        <select
          className="appDropDown border rounded-md py-1 px-2"
          onChange={handleChange}
          value={tipusEstudiant}
        >
          <option value="No Graduat">No Graduat</option>
          <option value="Graduat">Graduat</option>
        </select>
      </div>
      <Form
  tipusEstudiantSelect={tipusEstudiant}
  setPlacesDisponibles={setPlacesDisponibles}
  placesActuals={tipusEstudiant === "No Graduat" ? ngPlaces : gPlaces}
/>
    </div>
  );
}

export default App;