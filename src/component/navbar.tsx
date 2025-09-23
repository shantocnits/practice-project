import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/home">Home</NavLink></li>
        <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/project">Project</NavLink></li>
        <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/contact">Contact</NavLink></li>
      </ul>
    </div>
  );
};

export default Navbar;
