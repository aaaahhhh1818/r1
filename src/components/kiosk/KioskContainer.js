import React, {useState} from 'react';
import ProductDisplay from "./ProductDisplay";
import CartDisplay from "./CartDisplay";

const products = [
    {pno: 1, pname: '샤프', price: 3000},
    {pno: 2, pname: '공책', price: 1000},
    {pno: 3, pname: '지우개', price: 700},
    {pno: 4, pname: '샤프심', price: 500},
    {pno: 5, pname: '실내화', price: 6000}
]

const cart = []

const KioskContainer = () => {

    const [cartState, setCartState] = useState(cart) //장바구니 초기화하면 빈 카트로 만들고싶어서 빈 배열값 가져옴

    const addCart = (product) => {
        console.log("addCart...", product)
        setCartState([...cartState, product])
    }

    return (
        <div>
            <ProductDisplay products={products} addCart={addCart}></ProductDisplay>
            <CartDisplay cart={cart}></CartDisplay>
        </div>
    );
};

export default KioskContainer;