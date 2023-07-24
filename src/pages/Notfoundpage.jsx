import { NavLink } from "react-router-dom";

const NotFoundpage = () => (
  <div>
    Oops, not found. Go <NavLink to="/">home</NavLink>
  </div>
);

export default NotFoundpage;