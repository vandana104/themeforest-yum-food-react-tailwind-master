import { Navigate, Route, Routes } from "react-router-dom";
import { AdminLayout } from "../layouts";
import { useAuthContext } from "@/context";
import { allAdminFlattedRoutes } from "./index";

const AllRoutes = (props) => {
  const { session, isAuthenticated } = useAuthContext();

  return (
    <Routes>
      <Route>
        {allAdminFlattedRoutes.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            element={
              isAuthenticated && session?.role == "admin" ? (
                <AdminLayout {...props}>{route.element}</AdminLayout>
              ) : (
                <Navigate
                  to={{
                    pathname: "/auth/login",
                    search: "redirectTo=" + route.path,
                  }}
                />
              )
            }
          />
        ))}
      </Route>
    </Routes>
  );
};

export default AllRoutes;
