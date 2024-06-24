import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layout";
// import AuthLayout from "./auth/layout";
import LandingPage from "./landingpage/layout";
import DashboardLayout from "./dashboard/layout";



const rootRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route  element={<LandingPage />}>
        <Route
          path="/"
          lazy={async () => {
            const { default: Home } = await import("./landingpage/home");
            return { Component: Home };
          }
          }
        />
        <Route
        path="/bookings"
        lazy={async () => {
          const { default: Bookings } = await import("./bookings/index");
          return { Component: Bookings };
        }}/>
      </Route>
     
      <Route element={<DashboardLayout />}>
        <Route
          path="dashboard"
          lazy={async () => {
            const { default: Dashboard } = await import("./dashboard/home/index");
            return { Component: Dashboard };
          }}
        />
        <Route
        path="approvals"
        lazy={async ()=>{
          const {default:Approvals} = await import ("./dashboard/approvals/index");
          return{Component:Approvals}
        }}/>
        <Route
        path="usermanagement"
        lazy={async ()=>{
          const {default:UserManagement} = await import ("./dashboard/usermanagement/index");
          return{Component:UserManagement}
        }}/>
        <Route
        path="notification"
        lazy={async ()=>{
          const {default:Notifications} = await import("./dashboard/notification/index");
          return{Component:Notifications}
        }  
        }/>
        <Route
        path="helpsupport"
        lazy={async ()=>{
          const {default:HelpSupport} = await import("./dashboard/help&support/index");
          return{Component:HelpSupport}
        }}/>
        
</Route>
      {/* <Route element={<AuthLayout />}>
        <Route
          path="signin"
          lazy={async () => {
            const { default: Signin } = await import("./auth/signin");
            return { Component: Signin };
          }}
        />
        <Route
          path="signup"
          lazy={async () => {
            const { default: SignUp } = await import("./auth/signup");
            return { Component: SignUp };
          }}
        />
      </Route> */}
    </Route>
  )
);

export default rootRoutes;
