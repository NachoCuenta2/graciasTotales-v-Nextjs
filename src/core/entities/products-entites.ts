export interface ProductsEntities {
    id: string,
    Imagenes: string[],
    descripcion: string,
    disponible: boolean,
    titulo: string,
    valor: number,
    slug?: string
}