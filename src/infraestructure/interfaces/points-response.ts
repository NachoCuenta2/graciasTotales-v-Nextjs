export interface PointsResponse {
    ok: boolean
    cantidad: number
}

export interface RedeemablePointsResponse {
    ok: boolean;
    puntos: Puntos[];
}

export interface NewRedeemablePointsResponse {
    ok: boolean;
    puntos: Puntos;
}


export interface Puntos {
    cantidad: string;
    codigo: string;
    id?: string;
}

