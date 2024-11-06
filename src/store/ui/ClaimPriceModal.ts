import { UserEntities } from "@/core/entities/user-entities";
import { create } from "zustand";

export interface uiState {
    isActivePriceModal: boolean,
    setIsActivePriceModal: (mode: boolean) => void;
}

export const uiPriceModalStore = create<uiState>()((set, get) => ({

    isActivePriceModal: false,
    setIsActivePriceModal: (mode: boolean) => set({ isActivePriceModal: mode }),
}));