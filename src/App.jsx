import React, { useState } from 'react';
import Form from './components/Form';
import StudentList from './components/StudentList';



const App = () => {

  const [action, setAction] = useState('');
const [selectedItemId, setSelectedItemId] = useState('');

const handleItemSelection = (action, selectedItemId) => {
  setAction(action);
  setSelectedItemId(selectedItemId);
};


const restaurarPlaces = (pgm) => {
  pgm === 'Grau' ? setGPlaces(gPlaces + 1) : setNGPlaces(ngPlaces + 1);
};


  const [detallsEstudiant, setDetallsEstudiant] = useState([]);

  const [tipusEstudiant, setTipusEstudiant] = useState('No Graduat');
  const [ngPlaces, setNGPlaces] = useState(60);
  const [gPlaces, setGPlaces] = useState(40);

  const handleChange = (e) => {
    setTipusEstudiant(e.target.value);
  };

  const setPlacesDisponibles = (updatedPlaces) => {
    tipusEstudiant === 'Graduat'
      ? setGPlaces(updatedPlaces)
      : setNGPlaces(updatedPlaces);
  };

  return (
    <div className="App flex h-screen flex-col items-center justify-center ">
      <div className="programes my-2">
        <h3 className="title my-2 text-2xl text-blue-500">
          Formulari d'inscripció d'estudiants.
        </h3>
        <ul className="ulInscripcio ">
          <li
            className="parentLabels my-2 flex items-center justify-evenly"
            onChange={handleChange}
          >
            <label className="radioLabel">
              <input
                type="radio"
                value="No Graduat"
                name="programGroup"
                defaultChecked
                className="radioInput mr-2"
              />
              No Graduat
            </label>
            <label className="radioLabel">
              <input
                type="radio"
                value="Graduat"
                name="programGroup"
                className="radioInput mr-2"
              />
              Graduat
            </label>
          </li>
          <li className="parentLabels my-2">
            Places disponibles per estudiant{' '}
            <strong>
              {tipusEstudiant}:{' '}
              {tipusEstudiant === 'Graduat' ? gPlaces : ngPlaces}
            </strong>
          </li>
        </ul>
      </div>

     <Form
  tipusEstudiantSelect={tipusEstudiant}
  setPlacesDisponibles={setPlacesDisponibles}
  placesActuals={tipusEstudiant === 'PostGrau' ? gPlaces : ngPlaces}
  setDetallsEstudiant={setDetallsEstudiant}
  handleItemSelection={handleItemSelection}
/>


<StudentList
  detallsEstudiant={detallsEstudiant}
  setDetallsEstudiant={setDetallsEstudiant}
  action={action}
  setAction={setAction}
  selectedItemId={selectedItemId}
  restaurarPlaces={restaurarPlaces}
/>
    </div>
    
  );
};

export default App;