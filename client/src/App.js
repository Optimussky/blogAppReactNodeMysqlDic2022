import {

createBrowserRouter,
RouterProvider,
Route,
Outlet,
} from "react-router-dom";
import Register from "./pages/Register"
import Login from "./pages/Login"
import Write from "./pages/Write"
import Homepage from "./pages/Homepage"
import Single from "./pages/Single"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./style.scss"

const Layaout = () => {
	return (
		<>

		<Navbar />
		<Outlet />
		<Footer />
		</>		
	)
}


const router = createBrowserRouter([
	{
		path: "/",
		element: <Layaout/>,
		children:[
			{
				path: "/",
				element: <Homepage/>
			},
			{
				path: "/single",
				element: <Single/>
			},
			{
				path: "write",
				element: <Write/>
			},
		]
	},
	{
		path: "/register",
		element: <Register/>,
	},
	{
		path: "/login",
		element: <Login/>,
	},
	{
		path: "/write",
		element: <Write/>,

	},
	{
		path: "/Single",
		element: <Single/>,
	},
]);


function App() {
  return (
    <div className="app">
		<div className="container">
			<RouterProvider router={router} />
		</div>
    </div>
  );
}



export default App;
