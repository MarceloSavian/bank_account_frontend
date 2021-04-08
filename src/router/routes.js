import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
const Dashboard = () => import("@/pages/Dashboard.vue");
const Login = () => import("@/pages/Login.vue");

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  { path: "*", component: NotFound },
];

export default routes;
