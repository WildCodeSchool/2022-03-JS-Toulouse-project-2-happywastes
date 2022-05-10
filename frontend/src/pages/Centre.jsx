import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import collectCenters from "../services/collect_centers";
import NavBottom from "../components/NavBottom/NavBottom";
import "../assets/css/recycling-center.scss";

function Centre() {
  const { id } = useParams();
  const [centerData, setCenterData] = useState({});
  const [choices, setChoices] = useState({});

  const handleChoice = (e) => {
    const prop = e.target.id;
    setChoices(...choices, prop);
  };
  useEffect(() => {
    collectCenters.getOne(id).then((response) => setCenterData(response));
  }, []);
  return (
    <div id="recycling-center">
      {centerData.recordid ? (
        <>
          <h2>
            {centerData.fields.flux} - {centerData.fields.commune}
          </h2>
          <h3>Choississez les produits à recycler</h3>
          <ul>
            <li>
              <input
                type="checkbox"
                name="carton"
                id="carton"
                onChange={handleChoice}
              />
              <span>Carton</span>
            </li>
            <li>
              <input
                type="checkbox"
                name="verre"
                id="verre"
                onChange={handleChoice}
              />
              <span>Verre</span>
            </li>
            <li>
              <input
                type="checkbox"
                name="textile"
                id="textile"
                onChange={handleChoice}
              />
              <span>Textile</span>
            </li>
          </ul>
          <button type="button">Valider</button>
        </>
      ) : (
        <>Chargement</>
      )}
      <NavBottom />
    </div>
  );
}

export default Centre;
