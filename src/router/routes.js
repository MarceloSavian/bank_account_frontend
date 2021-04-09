import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

const Dashboard = () => import("@/pages/Dashboard.vue");
const AddMovement = () => import("@/pages/AddMovement.vue");
const Login = () => import("@/pages/Login.vue");
const SignUp = () => import("@/pages/SignUp.vue");

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
      },
      {
        path: "movement",
        name: "movement",
        component: AddMovement
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: SignUp
  },
  { path: "*", component: NotFound },
];

export default routes;
