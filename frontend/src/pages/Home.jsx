import SplashScreen from "../components/SplashScreen/SplashScreen";
import MenuList from "../components/MainMenu/MainMenu";
import ProfileButton from "../components/ProfileButton/ProfileButton";

export default function Home() {
  return (
    <div className="home">
      <SplashScreen />
      <MenuList />
      <ProfileButton />
    </div>
  );
}
