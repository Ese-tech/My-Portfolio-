import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import AboutMe from "../pages/AboutMe";
import MyProjects from "../pages/MyProjects";
import Contact from "../pages/Contact";
import Settings from "../pages/Settings";
import Card from "../../components/Card";
import ROUTES_PATHS from "./Routes_Paths";

function MainRoutes() {
	return (
		<Routes>
			<Route path={ROUTES_PATHS.HOME} element={<Home />} />
			<Route path={ROUTES_PATHS.ABOUT_ME} element={<AboutMe />} />
			<Route path={ROUTES_PATHS.MY_PROJECTS} element={<MyProjects />} />
			<Route path={ROUTES_PATHS.CONTACT} element={<Contact />} />
			<Route path={ROUTES_PATHS.SKILLS} element={<Skills />} />
			<Route path={ROUTES_PATHS.SETTINGS} element={<Settings />} />
			<Route path={ROUTES_PATHS.CARD} element={<Card />} />
		</Routes>
	);
}

export default MainRoutes;
