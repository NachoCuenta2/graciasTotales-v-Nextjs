import { create } from "zustand";

export interface uiState {
    message: string;
    isActiveMessage: boolean,
    setMessage: (message: string) => void;
    setIsActiveMessage: (mode: boolean) => void;
}

export const uiMessageStore = create<uiState>()((set) => ({
    message: '',
    isActiveMessage: false,
    setMessage: (message: string) => set({ message }),
    setIsActiveMessage: (mode: boolean) => set({ isActiveMessage: mode }),
}));