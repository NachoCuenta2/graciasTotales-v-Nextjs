import { create } from "zustand";

export interface uiState {
    isActiveAddProductModal: boolean,
    setIsActiveAddProductModal: (mode: boolean) => void;
}

export const uiAddProductModalStore = create<uiState>()((set) => ({

    isActiveAddProductModal: false,
    setIsActiveAddProductModal: (mode: boolean) => set({ isActiveAddProductModal: mode }),
}));