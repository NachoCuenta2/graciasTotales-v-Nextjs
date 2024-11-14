import { ProductsEntities } from "@/core/entities/products-entites";
import { create } from "zustand";

export interface ProductState {
    products: ProductsEntities[] | null,
    addProduct: (producto: ProductsEntities) => void;
    deleteProduct: (id: string) => void;
    addProducts: (productos: ProductsEntities[]) => void;
}

export const productStore = create<ProductState>()((set) => ({
    products: null,

    addProduct: (producto: ProductsEntities) => {
        set((state) => ({
            products: state.products ? [...state.products, producto] : [producto]
        }));
    },
    deleteProduct: (id: string) => {
        set((state) => ({
            products: state.products ? state.products.filter(p => p.id !== id) : null
        }));
    },

    addProducts: (productos: ProductsEntities[]) => {
        set((state) => ({
            products: state.products ? [...state.products, ...productos] : productos
        }));
    }

}));