export interface PointsResponse {
    ok: boolean
    cantidad: number
}

export interface RedeemablePointsResponse {
    ok: boolean;
    puntos: Punto[];
}

export interface Punto {
    cantidad: string;
    codigo: string;
    id: string;
}
