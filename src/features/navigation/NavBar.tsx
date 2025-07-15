import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faProjectDiagram,
  faEnvelope,
  faCogs,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import MobileView from "./MobileView";
import ROUTES_PATHS from "../routing/Routes_Paths";
import { useLanguage } from "../../contexts/LanguageContext";
import { ThemeToggle } from "../../components/ThemeToggle";
import { LanguageSelector } from "../../components/LanguageSelector";

export function NavBar() {
  const { t } = useLanguage();

  return (
    <>
      {/* Mobile View */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-900 dark:to-black shadow-lg z-50">
        <MobileView />
      </div>

      {/* Tablet View */}
      <div className="hidden md:flex lg:hidden fixed top-0 left-0 w-full h-16 bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-900 dark:to-black shadow-lg z-50 text-white">
        <nav className="flex flex-row justify-between items-center w-full px-4">
          {/* Navigation Links */}
          <div className="flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center px-3 py-2 rounded-lg bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm font-bold border border-teal-400/30"
                  : "flex items-center px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-slate-700/50 hover:to-slate-600/50 transition-all duration-300"
              }
            >
              <FontAwesomeIcon icon={faHome} className="mr-2 text-lg" />
              <span className="hidden xl:inline">{t("navigation.home")}</span>
            </NavLink>

            <NavLink
              to="/about-me"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center px-3 py-2 rounded-lg bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm font-bold border border-teal-400/30"
                  : "flex items-center px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-slate-700/50 hover:to-slate-600/50 transition-all duration-300"
              }
            >
              <FontAwesomeIcon icon={faUser} className="mr-2 text-lg" />
              <span className="hidden xl:inline">{t("navigation.about")}</span>
            </NavLink>

            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center px-3 py-2 rounded-lg bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm font-bold border border-teal-400/30"
                  : "flex items-center px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-slate-700/50 hover:to-slate-600/50 transition-all duration-300"
              }
            >
              <FontAwesomeIcon icon={faCogs} className="mr-2 text-lg" />
              <span className="hidden xl:inline">{t("navigation.skills")}</span>
            </NavLink>

            <NavLink
              to="/my-projects"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center px-3 py-2 rounded-lg bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm font-bold border border-teal-400/30"
                  : "flex items-center px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-slate-700/50 hover:to-slate-600/50 transition-all duration-300"
              }
            >
              <FontAwesomeIcon
                icon={faProjectDiagram}
                className="mr-2 text-lg"
              />
              <span className="hidden xl:inline">
                {t("navigation.projects")}
              </span>
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center px-3 py-2 rounded-lg bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm font-bold border border-teal-400/30"
                  : "flex items-center px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-slate-700/50 hover:to-slate-600/50 transition-all duration-300"
              }
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-lg" />
              <span className="hidden xl:inline">
                {t("navigation.contact")}
              </span>
            </NavLink>

            <NavLink
              to={ROUTES_PATHS.SETTINGS}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center px-3 py-2 rounded-lg bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm font-bold border border-teal-400/30"
                  : "flex items-center px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-slate-700/50 hover:to-slate-600/50 transition-all duration-300"
              }
            >
              <FontAwesomeIcon icon={faGear} className="mr-2 text-lg" />
              <span className="hidden xl:inline">
                {t("navigation.settings")}
              </span>
            </NavLink>
          </div>

          {/* Theme und Language Controls */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-slate-500 dark:via-slate-600 to-transparent"></div>
            <LanguageSelector />
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;