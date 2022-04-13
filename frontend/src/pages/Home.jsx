import MenuList from "../components/MenuList";
import ProfileButton from "../components/ProfileButton/ProfileButton";

export default function Home() {
  return (
    <div className="home">
      <ProfileButton />
      <MenuList />
    </div>
  );
}
