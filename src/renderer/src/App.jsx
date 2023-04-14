import axios from "axios";
import React, {useEffect, useState} from "react";

function App() {
  const [partsOfDays, setPartsOfDays] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1337/api/parts-of-days")
      .then(response => {
        console.log(response.data.data);
        setPartsOfDays(response.data.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Liste des parties de la journée</h1>
      {partsOfDays.map((partOfDay) => (
        <ul key={partOfDay.attributes.id}>
          <li>{partOfDay.attributes.day}</li>
        </ul>
      ))}
    </div>
  );
}

export default App;
