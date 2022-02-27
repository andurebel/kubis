import { Navbar } from "./Navbar";
import background from "../assets/header.png";

export const Header = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${background})` }}>
        <Navbar />
        <main className="container mx-auto text-center max-w-4xl px-10 py-20 mt-10">
          <h1 className="text-white text-4xl font-bold pb-10 mb-10">
            Brand storytellers, curious minds ,pioneers in creating the
            never-seen-before
          </h1>
        </main>
      </div>
    </>
  );
};

export default Header;
