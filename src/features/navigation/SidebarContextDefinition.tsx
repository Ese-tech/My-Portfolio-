import { createContext } from "react";

interface SidebarContextProps {
	isSidebarOpen: boolean;
	toggleSidebar: () => void;
}

export const SidebarContext = createContext<SidebarContextProps | undefined>(
	undefined
);
