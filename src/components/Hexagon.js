import hexagon from "../assets/hexagon.png";

export const Hexagon = ({ title }) => {
  return (
    <>
      <div>
        <img src={hexagon} alt="hexagon shaped mask" />
        <h1 className="text-center py-4 font-bold text-xl text-purple-800">
          {title}
        </h1>
      </div>
    </>
  );
};

export default Hexagon;
