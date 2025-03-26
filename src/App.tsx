import { BrowserRouter } from "react-router";
import NavBar from "./features/navigation/NavBar";
import MainRoutes from "./features/routing/Routes";
import { SidebarProvider } from "./features/navigation/SidebarContext";
import { SideBar } from "./features/navigation/SideBar";

function App() {
	return (
		<SidebarProvider>
			<BrowserRouter>
				<SideBar /> {/* Always render SideBar */}
				<MainRoutes />
				<NavBar />
			</BrowserRouter>
		</SidebarProvider>
	);
}

export default App;
