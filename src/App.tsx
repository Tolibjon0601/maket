import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/layouts"
import HomePage from "./pages/home/home"
import LoginPage from "./pages/login/login"
import AuthPage from "./pages/auth/auth"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SinglePage from './pages/singlepage/singlePage';
import FavouritePage from "./pages/favouritePage"
import {  AuthProvider } from './pages/authcontext/authcontext';
import { Provider } from "react-redux"
import store from "./reducer/store"
import Profile from "./pages/profile/profile"
import FormPage from "./pages/formPage/formPage"

const queryClient = new QueryClient();


const router=createBrowserRouter([
{
path:"/",
element:<MainLayout/>,
children:[
{index:true,element:<HomePage/>},
{path:"login",element:<LoginPage/>},
{path:"auth",element:<AuthPage/>},
{ path: "product/:id", element: <SinglePage /> },
{path:"favouritePage",element:<FavouritePage/>},
{path:"profile",element:<Profile/>},
{path:"formPage",element:<FormPage/>}
]
}
])

function App() {

  return (
   <>
     <Provider store={store}>
	<AuthProvider >
  <QueryClientProvider client={queryClient}>

   <RouterProvider router={router} />
   <ToastContainer />
   </QueryClientProvider>
   </AuthProvider>
   </Provider>
   </>
  )
}

export default App
