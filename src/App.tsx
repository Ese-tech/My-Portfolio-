import { BrowserRouter } from "react-router";
import NavBar from "./features/navigation/NavBar";
import MainRoutes from "./features/routing/Routes";
import { SidebarProvider } from "./features/navigation/SidebarContext";
import { SideBar } from "./features/navigation/SideBar";
import SocialMedia from "./components/SocialMedia";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <SidebarProvider>
          <BrowserRouter>
            <SideBar />
            <div className="main-content w-full">
              <NavBar />
              <MainRoutes />
              <SocialMedia />
            </div>
          </BrowserRouter>
        </SidebarProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
