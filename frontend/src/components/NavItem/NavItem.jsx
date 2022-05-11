import { Link } from "react-router-dom";
import "./NavItem.css";
import "../../assets/css/main.css";

function NavItem(props) {
  const { name, color, image, routePath } = props;
  return (
    <Link to={routePath}>
      <div className={`menu-item ${color}`}>
        <img src={image} alt="" />
        <p className={`menu-item-text ${`${color}stroke`}`}>{name}</p>
      </div>
    </Link>
  );
}

export default NavItem;
