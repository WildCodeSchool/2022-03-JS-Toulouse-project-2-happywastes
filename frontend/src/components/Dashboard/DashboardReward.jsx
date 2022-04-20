import rewards from "./DataReward";

function DashboardReward() {
  return (
    <div className="container-reward">
      <h2>Mes dernières récompenses</h2>
      <ul>
        {" "}
        {rewards.slice(rewards.length - 4).map((reward) => {
          return (
            <li>
              <img src={reward.img} alt="test" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DashboardReward;
