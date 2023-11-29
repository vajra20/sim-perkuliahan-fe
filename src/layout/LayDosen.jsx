import React from "react";
import { useLocation, Route, Routes, Navigate } from "react-router-dom";
import routes from "../routes";
import Sidebar from "../components/Sidebar";

const Admin = (props) => {
  const roles = "dosen";
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    (document.scrollingElement.scrollTop = 0),
      (document.documentElement.scrollTop = 0),
      (mainContent.current.scrollTop = 0);
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/dosen") {
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
      <div
        className="bg-color-dashboard w-full h-screen overflow-auto pl-[300px]"
        ref={mainContent}
      >
        <Routes>{getRoutes(routes)}</Routes>
        <Routes>
          {roles === "dosen" && (
            <Route
              path="*"
              // element={<Navigate to="/admin/beranda-admin" replace />}
            />
          )}
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
