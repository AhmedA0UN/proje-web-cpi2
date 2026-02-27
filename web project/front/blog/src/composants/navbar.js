import { Link } from "react-router-dom";
import persImg from "./composants/imgs/pers.jpg"; 

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <img src={persImg} alt="Profile" />
        </li>
        <li>
          <h4>b7md_shop</h4>
        </li>
        <li>
          <Link to="/art">Art</Link>
        </li>
        <li>
          <Link to="/sceances">Sceances</Link>
        </li>
        <li>
          <Link to="/cinema">Cinema</Link>
        </li>
        <li>
          <Link to="/sport">Sport</Link>
        </li>
        <li>
          <img src="" alt="jjh" />
        </li>
        <li>username</li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;