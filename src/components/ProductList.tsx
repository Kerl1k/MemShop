import Product from './Product';

const ProductList = ({list}:any) => {

    return (
        <div className="list">
        {list.length > 0 ?
            list.map((p: any) =>
                <Product key={p.id} product={p}></Product>
            )
            :
            <h1>Все закончилось</h1>}

    </div>
    );
};

export default ProductList;