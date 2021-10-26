import React from 'react';

const ProductDisplay = ({products, addCart}) => {

    //상품 루프 돌려주기
    const list = products.map((p) => <li key={p.pno} onClick={() => addCart(p)}>{p.pname} --- {p.price}</li>) //(p)의 괄호 생략 가능(파라미터가 하나일 때)

    return (
        <div>
            <h1>상품목록</h1>
            <ul>
                {list}
            </ul>
        </div>
    );
};

export default ProductDisplay;