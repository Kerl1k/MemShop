import './App.css';
import Header from './components/Header'
import React from "react";

function App() {
  type TypeProduct = {
    id:number,
    name: string,
    img:string,
    price:string,
    about: string,
  }[]

  const [product, setProduct] = React.useState<TypeProduct>([{
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
    }])

  // const [carts,setCarts] = React.useState: <any>()

  // function AddCart(id:number) {
  //   product.forEach(p=>{
  //     if(p.id === id){
  //       setCart([...cart, p])
  //     }
  //   })
  // }


  return (
      <div className="App">
        <Header/>
        <h1>
          Shop
        </h1>
        <div className="list">
          {product.map(p =>
              <div key={p.id}  className="product">
                <div className="product_img">{p.img}</div>
                <div className="product_price">{p.price}</div>
                <div className="product_name">{p.name}</div>
                {/*<button onClick={() => AddCart(p.id)}*/}
                {/*        className="product_button">В корзину*/}
                {/*</button>*/}
              </div>)}
        </div>
      </div>
  );
}

export default App;
