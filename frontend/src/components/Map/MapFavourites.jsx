import { motion } from "framer-motion";
import "./MapFavourites.scss";
import variants from "../../assets/js/variants";
import MapFavouriteItem from "./MapFavouriteItem";

function MapFavourites({ data, showTitle }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      id="map-list"
    >
      {showTitle && (
        <>
          <h2>Choisir un centre de recylage</h2>
          <ul className="fa-ul">
            {data.length > 0 ? (
              data.map((el) => <MapFavouriteItem key={el.recordid} el={el} />)
            ) : (
              <div className="info-message">Pas encore de centres favoris</div>
            )}
          </ul>
        </>
      )}
    </motion.div>
  );
}

export default MapFavourites;
