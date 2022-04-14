import MenuList from "../components/MenuList";
import BackButton from "../components/BackButton/BackButton";
import ProfileButton from "../components/ProfileButton/ProfileButton";

export default function Home() {
  return (
    <div className="home">
      <ProfileButton />
      <MenuList />
      <BackButton />
    </div>
  );
}
