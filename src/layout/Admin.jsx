import React from "react";
import { useLocation, Route, Routes, Navigate } from "react-router-dom";
import routes from "../routes";
import Sidebar from "../components/Sidebar";

const Admin = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    (document.scrollingElement.scrollTop = 0),
      (document.documentElement.scrollTop = 0),
      (mainContent.current.scrollTop = 0);
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/mahasiswa") {
        return (
          <Route path={prop.path} element={prop.component} key={key} exact />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <div>
      <Sidebar {...props} routes={routes} />
      <div ref={mainContent}>
        <Routes>
          {getRoutes(routes)}
          <Route
            path="*"
            element={<Navigate to="/mahasiswa/jadwal" replace />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
