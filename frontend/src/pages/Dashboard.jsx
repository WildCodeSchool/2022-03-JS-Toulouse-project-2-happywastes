import BackButton from "../components/BackButton/BackButton";
import NavBottom from "../components/Common/NavBottom/NavBottom";
import ProfileButton from "../components/Common/ProfileButton/ProfileButton";
import "./Dashboard.css";

export default function Dashboard() {
  const reward = [
    {
      id: 1,
      badge: "plastic bottle",
      icon: "src/assets/img/iconYellow-small.png",
    },
  ];

  return (
    <div className="dashboard">
      <div className="container-avatar" />
      {reward.map((element) => (
        <ul className="container-reward">
          <li>
            <img src={element.icon} alt="" />
          </li>
        </ul>
      ))}
      <BackButton />
      <ProfileButton />
      <NavBottom />
    </div>
  );
}
