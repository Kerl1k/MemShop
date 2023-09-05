interface IProduct {
    id:number;
    name: string;
    img:string;
    price:string;
    about: string;
}

const defaultState: IProduct[] = [{
    id: 1,
    name: "banana",
    img: "url",
    price: "123р",
    about: "banana mmm monks"
},
    {
        id: 2,
        name: "apple",
        img: "url",
        price: "321р",
        about: "hey apple"
    },
    {
        id: 3,
        name: "kiwi",
        img: "url",
        price: "42р",
        about: "money"
    }]

const ADD_PRODUCT = "ADD_PRODUCT"
const GET_PRODUCT = "GET_PRODUCT"

export const ProductReducer =( (state = defaultState, action: any)=> {
    switch (action.type){
        case ADD_PRODUCT:
            return {...state,}
        case GET_PRODUCT:
            return {...state,}
        default:
            return state
    }
})
