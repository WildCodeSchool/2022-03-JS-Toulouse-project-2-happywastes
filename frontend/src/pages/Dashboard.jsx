import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import BackButton from "../components/BackButton/BackButton";
import NavBottom from "../components/NavBottom/NavBottom";
import ProfileButton from "../components/ProfileButton/ProfileButton";
import "../assets/css/dashboard.css";
import DashboardReward from "../components/Dashboard/DashboardReward";
import Avatar from "../components/Avatar/Avatar";
import Map from "../components/Map/Map";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Avatar
        avatarImg="https://avatars.dicebear.com/api/adventurer-neutral/.svg?eyes[]=variant01&eyebrows[]=variant01&mouth[]=variant01&accessoiresProbability=0&accessoires[]=sunglasses&backgroundColor[]=variant01"
        className="container-avatar"
      />
      <DashboardReward />
      <div className="container-map">
        <Link to="/recycler">
          {" "}
          <FontAwesomeIcon
            className="img-magnifying-glass"
            icon={faSearchPlus}
            size="xl"
          />
        </Link>

        <Map
          size="small"
          center={[45.236, 0.8992]}
          userPos={[45.236, 0.8992]}
        />
      </div>

      <BackButton />
      <ProfileButton />
      <NavBottom />
    </div>
  );
}
