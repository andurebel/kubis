import { Navbar } from "./Navbar";
import background from "../assets/header.png";

export const Header = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${background})` }}>
        <Navbar />
      </div>
    </>
  );
};

export default Header;
