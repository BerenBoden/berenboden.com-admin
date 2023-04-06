import { Outlet } from "react-router-dom";
import Authentication from "./Authentication";

function index() {
  return <Outlet />;
}

export default Authentication(index);
