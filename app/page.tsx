import variables from "./sass/variables.module.sass";
import { bebas } from "./utils/fonts";
import CardComponent from "./components/Card.component";

const name = "Hola mundo";

export default function Home() {
  return (
    <div
      className="w-screen flex justify-center items-center h-screen white-text"
      style={{ backgroundColor: variables.bgColor }}
    >
      <div
        className={`${bebas.className} w-[90%] h-[90%] font-[100] text-[10rem] rounded-[1rem] flex justify-center items-center`}
        style={{
          backgroundColor: variables.bgColorGreen,
          color: variables.bgColor,
        }}
      >
        <CardComponent />
      </div>
    </div>
  );
}
