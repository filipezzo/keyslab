import { Link } from "react-router-dom";
import keysLogo from "../assets/Frame 127.png";
import skinLogo from "../assets/image 3.png";

function Aside() {
  return (
    <aside className="gradient  hidden h-screen w-full md:flex md:max-w-[483px] md:flex-col">
      <header>
        <Link className="flex items-center gap-2 p-10" to="/">
          <img className="h-8 w-8 " src={keysLogo} alt="keyslab logo" />
          <h1 className="font-semibold text-white">keyslab</h1>
        </Link>
      </header>
      <img
        src={skinLogo}
        className="mt-auto w-full "
        alt="a fortnite skin image"
      />
    </aside>
  );
}

export default Aside;
