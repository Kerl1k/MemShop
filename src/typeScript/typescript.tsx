export interface IProduct {
    id:number;
    name: string;
    img:string;
    price:number;
    about: string;
    type: string[];
}


export interface ICart extends IProduct{
    count: number;
}

export interface IUsers{
    id: number;
    login: string;
    password: string;
    type: string;
}