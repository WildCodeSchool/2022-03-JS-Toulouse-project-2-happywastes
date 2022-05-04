import axios from "axios";

const collectCenters = {
  inZone: (distance, position) => {
    const geoObject = `${position[0]},${position[1]},${distance}`;
    return new Promise((resolve, reject) => {
      axios
        .get(
          `https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=points-dapport-volontaire-dechets-et-moyens-techniques&rows=200&geofilter.distance=${geoObject}`
        )
        .then((data) => resolve(data.data.records))
        .catch((error) => reject(error));
    });
  },
  getTotalOfType: (type) => {
    const typeName = [
      "Récup'verre",
      "Récup'Textile",
      "Collecte sélective",
      "Déchetterie",
      "Ordures ménagères",
    ];
    return new Promise((resolve, reject) => {
      axios
        .get(
          `https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=points-dapport-volontaire-dechets-et-moyens-techniques&refine.flux=${
            typeName[type - 1]
          }`
        )
        .then((data) => {
          resolve(data.data.nhits);
        })
        .catch((err) => reject(err));
    });
  },
};

export default collectCenters;
