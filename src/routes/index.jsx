/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { flattenRoutes } from "@/helpers";

// default pages
// https://react.dev/reference/react/lazy#suspense-for-code-splitting
const Landing = lazy(() => import("../app/page"));
const NotFound = lazy(() => import("../app/not-found"));




const AdminDashboard = lazy(() => import("../app/admin/dashboard/page"));



const authRoutes = [
 
  
];

const clientRoutes = [

];

const clientAccountRoutes = [
  // {
  //   path: "/cart",
  //   name: "Cart",
  //   element: <Cart />,
  // },
  // {
  //   path: "/checkout",
  //   name: "Checkout",
  //   element: <Checkout />,
  // },
  // {
  //   path: "/wishlist",
  //   name: "Wishlist",
  //   element: <Wishlist />,
  // },
];

const adminRoutes = [
  {
    path: "/admin/dashboard",
    name: "Dashboard",
    element: <AdminDashboard />,
  },
];

const otherRoutes = [
  {
    path: "/",
    name: "Landing",
    element: <Landing />,
  },
  {
    path: "/not-found",
    name: "Page Not Found",
    element: <NotFound />,
  },
  // {
  //   path: "/maintenance",
  //   name: "Maintenance",
  //   element: <Maintenance />,
  // },
  // {
  //   path: "/coming-soon",
  //   name: "Coming Soon",
  //   element: <ComingSoon />,
  // },
  {
    path: "*",
    name: "Page Not Found",
    element: <NotFound />,
  },
];


const allAdminRoutes = [...adminRoutes];

const allAdminFlattedRoutes = flattenRoutes([...allAdminRoutes]);

export {
  allAdminFlattedRoutes,
};
