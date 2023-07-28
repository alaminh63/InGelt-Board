import { NavLink } from "react-router-dom";

import svgLogo from "../assets/InGelt-white 3.svg";

const NavigationBar = () => {
  return (
    <>
      <div className=" bg-[#051C45] flex  border">
        <ul className="flex gap-8 text-xl font-bold py-2 ">
          <li>
            <NavLink to="/">
              <img className="w-16 ml-36" src={svgLogo} alt="" />
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavigationBar;
