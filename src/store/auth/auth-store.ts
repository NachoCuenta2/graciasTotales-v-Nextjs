import { UserEntities } from "@/core/entities/user-entities";
import { create } from "zustand";

export interface authState {
    status: 'Logged' | 'Unlogged' | 'Loading';
    user: UserEntities | undefined
    ErrorMessage: string | undefined,
    points: number,
    mode: 'Cliente' | 'Admin' | undefined,
    canjes: [],
    setPoints: (points: number) => void;
    setLogged: (user: UserEntities, modo: 'Cliente' | 'Admin') => void;
    unlogue: (error?: string) => void;
    setStatus: (modo: 'Logged' | 'Unlogged' | 'Loading') => void;
}

export const authStore = create<authState>()((set) => ({
    user: undefined,
    status: 'Unlogged',
    ErrorMessage: undefined,
    points: 0,
    mode: undefined,
    canjes: [],
    setPoints: (points: number) => { set({ points }) },
    setStatus: (modo: 'Logged' | 'Unlogged' | 'Loading') => { set({ status: modo }) },
    setLogged: (user: UserEntities, modo: 'Cliente' | 'Admin') => { set({ user: user, status: 'Logged', mode: modo }); },
    unlogue: (error?: string) => {
        set({ user: undefined, status: 'Unlogged', canjes: [], mode: undefined, points: 0, ErrorMessage: error ? error : undefined })
    },

}));