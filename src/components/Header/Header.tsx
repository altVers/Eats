import "./Header.css";
import { UserProfile } from "../UserProfile/UserProfile";
import { Logo } from "../Logo/Logo";

const src = "../../../public/avatar.png";

export const Header = (): JSX.Element => {
  return (
    <>
      <header>
        <Logo />
        <UserProfile src={src} />
      </header>
    </>
  );
};
