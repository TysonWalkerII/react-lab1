import AdDesigner from "./adDesigner";

interface Props {
  flavor: string;
  fontSize: number;
  darkTheme: boolean;
}

const Ad = ({ flavor, fontSize, darkTheme }: Props) => {
  return (
    <div
      className={`${darkTheme ? "Ad dark" : "Ad"}`}
      style={{
        fontSize: fontSize + "px",
      }}
    >
      <p className="vote">Vote For</p>
      <p className="flavor">{flavor}</p>
    </div>
  );
};

export default Ad;
