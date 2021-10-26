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
// import React, {useState} from 'react';
// import ShowName from "./ShowName";
//
// const HelloWorld = () => {
//
//     const name = "Hong Gil Dong"
//     const [num, setNum] = useState(10) //초기값 지정 (useState() 호출하면 모니터링 시작됨)
//
//     return (
//         <>
//             <div>
//                 <h1>Hello World!</h1>
//             </div>
//             <ShowName name={name} num={num}></ShowName>
//             <button onClick={() => setNum(num + 1)}>CHANGE</button> {/*버튼클릭하면 1씩 증가*/}
//         </>
//     );
// };
//
// export default HelloWorld;


// import React, {useState} from 'react';
// import ShowName from "./ShowName";
// import Dice from "./Dice";
//
// const initState = {value:1} //초기상태 설정
//
// const HelloWorld = () => {
//
//     const name = "Hong Gil Dong"
//     const [num, setNum] = useState({value:10}) //객체 리터럴
//
//     const change = () => {
//         // num.value = num.value + 1
//         // console.log(num)
//         // setNum(num) // 기존 객체 그대로 쓰고 값 리턴하기 때문에 리렌더링 안함
//
//         const newNum = {value:num.value + 1} //{}가 새로 나왔으니 새로운 객체
//         setNum(newNum) //완전히 새로운 객체로 바뀌는 거기 때문에 리렌더링 필요
//     }
//
//     return (
//         <>
//             <Dice></Dice>
//
//             <div>
//                 <h1>Hello World!</h1>
//             </div>
//             <h1>{num.value}</h1>
//             {/*<button onClick={() => setNum(num.value = num.value + 1)}>CHANGE</button> /!*리턴값이 없기 때문에 클릭하면 공백 -> 한번더 클릭시 에러*!/*/}
//             <button onClick={() => change()}>CHANGE</button>
//         </>
//     );
// };
//
// export default HelloWorld;


//키오스크
import React from 'react';
import CountContainer from "./counter/CountContainer";
import KioskContainer from "./kiosk/KioskContainer";

const HelloWorld = () => {
    return (
        <div>
            <KioskContainer></KioskContainer>
        </div>
    );
};

export default HelloWorld;