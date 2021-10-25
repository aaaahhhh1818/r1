// import React from 'react';
// import ShowName from "./ShowName";
//
// const HelloWorld = () => {
//
//     const display = () => {
//         console.log("display")
//     }
//
//     return (
//         <>
//             <div>
//                 <h1>Hello World!</h1>
//             </div>
//             <ShowName name="Hong Gil Dong" fn = {display}></ShowName> {/*display는 변수니까 {}로 감싸줌*/}
//         </>
//     );
// };
//
// export default HelloWorld; //()사용안함. 실행하는거 아님. 컴포넌트 반환된 것

// <상위 컴포넌트에서 하위 컴포넌트? - 컴포넌트 간의 통신 (컨테이너형 컴포넌트)>
import React, {useState} from 'react';
import ShowName from "./ShowName";

const HelloWorld = () => {

    const name = "Hong Gil Dong"
    const [num, setNum] = useState(10) //초기값 지정 (useState() 호출하면 모니터링 시작됨)

    return (
        <>
            <div>
                <h1>Hello World!</h1>
            </div>
            <ShowName name={name} num={num}></ShowName>
            <button onClick={() => setNum(num + 1)}>CHANGE</button> {/*버튼클릭하면 1씩 증가*/}
        </>
    );
};

export default HelloWorld;