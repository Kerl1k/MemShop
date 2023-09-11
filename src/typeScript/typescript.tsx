export interface IProduct {
    id:number;
    name: string;
    img:string;
    price:number;
    about: string;
}


export interface ICart extends IProduct{
    count: number;
}

export interface IUsers extends ICart{
    id: number;
    login: string;
    password: string;
}