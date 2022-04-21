import { Link } from "react-router-dom";
import rewards from "./DataReward";
import "../../assets/css/main.css";
import "./DashboardReward.css";

function DashboardReward() {
  return (
    <div className="container-reward">
      <h2>Mes dernières récompenses</h2>
      <ul className="container-img">
        {" "}
        {rewards.slice(rewards.length - 4).map((reward) => {
          return (
            <li>
              <img src={reward.img} alt="test" />
            </li>
          );
        })}
      </ul>
      <Link className="btn-stats" to="/dashboard/my-rewards">
        mes stats
      </Link>
    </div>
  );
}

export default DashboardReward;
