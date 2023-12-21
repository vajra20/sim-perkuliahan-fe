import { Link } from "react-router-dom";

function NavLink({ href, children }) {
  return (
    <Link
      className="inline-flex text-color-page hover:text-blue-600 transition-all text-lg font-normal"
      to={href}
    >
      {children}
    </Link>
  );
}
 
export default NavLink;
