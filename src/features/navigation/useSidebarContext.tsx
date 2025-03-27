import { useContext } from "react";
import { SidebarContext } from "./SidebarContextDefinition";

export function useSidebarContext() {
	const context = useContext(SidebarContext);
	if (!context) {
		throw new Error("useSidebarContext must be used within a SidebarProvider");
	}
	return context;
}
