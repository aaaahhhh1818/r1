// import React from 'react';

// const ShowName = (props) => { //props 넘겨줘서 값 바꿔줌
//
//     const fn = props.fn //순수한 js 코드기 때문에 브레이스{} 사용 안함. 그냥 전달 받기
//
//     fn() //fn은 함수
//
//     return (
//         <div>
//             <h1>{props.name}</h1>
//         </div>
//     );
// };
//
// export default ShowName;

// <useState() 사용1>
// import React, {useState} from 'react';
//
// const ShowName = ({name, fn}) => { //구조분해 할당
//
//     const [num, setNum] = useState(10)
//
//     fn()
//
//     const changeNum = () => {
//         alert("changeNum........")
//         setNum(100)
//     }
//
//     return (
//         <div>
//             <h1>{name}</h1>
//             <h1>{num}</h1>
//             <button onClick={() => changeNum()}>CHANGE</button> {/*onClick을하면 changeNum()함수 실행해라*/}
//         </div>
//     );
// };
//
// export default ShowName;


import React from 'react';

const ShowName = ({name, num}) => {

    console.log("show name.................") //상태 바뀌면 컴포넌트 계속 호출되는거 확인 로그 찍기

    return (
        <div>
            <h1>{name}</h1>
            <h1>{num}</h1>
        </div>
    );
};

export default ShowName;