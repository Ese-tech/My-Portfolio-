import { BrowserRouter } from "react-router";
import NavBar from "./features/navigation/NavBar";
import MainRoutes from "./features/routing/Routes";
import { SidebarProvider } from "./features/navigation/SidebarContext";
import { SideBar } from "./features/navigation/SideBar";
import SocialMedia from "./components/SocialMedia";

function App() {
	return (
		<SidebarProvider>
			<BrowserRouter>
				<SideBar />
				<div className='main-content'>
					<MainRoutes />
					<NavBar />
					<SocialMedia />
				</div>
			</BrowserRouter>
		</SidebarProvider>
	);
}

export default App;
