import NavBottom from "../components/Common/NavBottom/NavBottom";
import ProfileButton from "../components/Common/ProfileButton/ProfileButton";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <ProfileButton />
      <NavBottom />
    </div>
  );
}
