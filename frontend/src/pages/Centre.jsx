import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import collectCenters from "../services/collect_centers";

function Centre() {
  const { id } = useParams();
  const [centerData, setCenterData] = useState({});
  useEffect(() => {
    collectCenters.getOne(id).then((response) => setCenterData(response));
  }, []);
  return (
    <div>
      {centerData.recordid ? (
        <>
          <h2>{centerData.fields.flux}</h2>
          <h3>{centerData.fields.commune}</h3>

          <button type="button">Valider</button>
        </>
      ) : (
        <>Chargement</>
      )}
    </div>
  );
}

export default Centre;
