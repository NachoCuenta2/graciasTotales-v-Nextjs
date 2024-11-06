import { UserEntities } from "@/core/entities/user-entities";
import { create } from "zustand";

export interface uiState {
    IsOpenSideBar: boolean;
    setSideBarMode: (mode: boolean) => void;

}

export const SideBarStore = create<uiState>()((set, get) => ({
    IsOpenSideBar: false,
    setSideBarMode: (mode: boolean) => set({ IsOpenSideBar: mode }),
}));