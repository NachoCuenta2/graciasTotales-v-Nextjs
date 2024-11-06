export interface UserEntities {
    uid: string,
    displayName: string,
    email: string,
    modo?: 'Admin' | 'Cliente'
}