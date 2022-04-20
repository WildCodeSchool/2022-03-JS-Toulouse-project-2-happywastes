import RewardResume from "../components/RewardResumeList/RewardResumeList";
import BackButton from "../components/BackButton/BackButton";
import NavBottom from "../components/NavBottom/NavBottom";
import ProfileButton from "../components/ProfileButton/ProfileButton";
import "../assets/css/dashboard.css";
// import DashboardAvatar from "../components/Dashboard/DashboardAvatar";
// import DashboardMap from "../components/Dashboard/DashboardMap";
import DashboardReward from "../components/Dashboard/DashboardReward";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="container-avatar" />
      <DashboardReward />
      <div className="container-map" />
      <BackButton />
      <ProfileButton />
      <RewardResume />
      <NavBottom />
    </div>
  );
}
