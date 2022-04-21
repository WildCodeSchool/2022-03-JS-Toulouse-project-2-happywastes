import MenuList from "../components/MainMenu/MainMenu";
import ProfileButton from "../components/ProfileButton/ProfileButton";

export default function Home() {
  return (
    <div className="home">
      <MenuList />
      <ProfileButton />
    </div>
  );
}
