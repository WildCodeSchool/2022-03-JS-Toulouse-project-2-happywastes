import MenuList from "../components/MenuList";
import ProfileButton from "../components/Common/ProfileButton/ProfileButton";
import BackButton from "../components/BackButton/BackButton";

export default function Home() {
  return (
    <div className="home">
      <BackButton />
      <ProfileButton />
      <MenuList />
    </div>
  );
}
