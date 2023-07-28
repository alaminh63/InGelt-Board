import { Outlet } from "react-router-dom";
import NavigationBar from "../Components/NavigationBar";

const Root = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>
  );
};

export default Root;
