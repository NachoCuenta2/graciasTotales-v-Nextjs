import { create } from "zustand";

export interface uiState {
    isActivePriceModal: boolean,
    setIsActivePriceModal: (mode: boolean) => void;
}

export const uiPriceModalStore = create<uiState>()((set) => ({

    isActivePriceModal: false,
    setIsActivePriceModal: (mode: boolean) => set({ isActivePriceModal: mode }),
}));