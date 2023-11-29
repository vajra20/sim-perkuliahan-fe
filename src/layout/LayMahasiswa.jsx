import React from "react";
import { useLocation, Route, Routes, Navigate } from "react-router-dom";
import routes from "../routes";
import Sidebar from "../components/Sidebar";

const Mahasiswa = (props) => {
  const roles = "mahasiswa";
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    (document.scrollingElement.scrollTop = 0),
      (document.documentElement.scrollTop = 0),
      (mainContent.current.scrollTop = 0);
  }, [location]);

  const getRoutes = (routes, layout) => {
    return routes
      .filter((prop) => prop.layout === layout)
      .map((prop, key) => (
        <Route path={prop.path} element={prop.component} key={key} exact />
      ));
  };

  return (
    <div>
      <Sidebar {...props} routes={routes} />
      <div
        className="bg-color-dashboard w-full h-screen overflow-auto pl-[300px]"
        ref={mainContent}
      >
        <Routes>{getRoutes(routes, `/${roles}`)}</Routes>
        <Routes>
          {roles === "mahasiswa" && (
            <Route
              path="*"
              // element={<Navigate to="/mahasiswa/beranda" replace />}
            />
          )}
        </Routes>
      </div>
    </div>
  );
};

export default Mahasiswa;
