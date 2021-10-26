import React, {useState} from 'react';
import CountDisplay from "./CountDisplay";
import CountButtons from "./CountButtons";

const CountContainer = () => {

    const [num, setNum] = useState(0)

    const change = (amount) => {
        setNum(num + amount) //연산을 하면 새로운 애가 나오기 때문에 state 써먹기 좋음
    }

    return (
        <div>
            <CountDisplay num={num}></CountDisplay>
            <CountButtons fn={change}></CountButtons> {/*fn이라는 함수로 받아 내가 change라고 줄게*/}
        </div>
    );
};

export default CountContainer;