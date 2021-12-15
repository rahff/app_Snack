export interface User {
    name?: string;
    firstname?: string;
    email: string;
    adress?: string;
    password?: string;
    role?: number;
    confirm: boolean;
    _id?: string;
    commandes?: any[]
}

