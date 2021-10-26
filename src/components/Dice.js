import React, {useState} from 'react';

//몇번 굴렸고 숫자 몇번인지?
const initState = {
    count: 0,
    value: 0
}

const Dice = () => {

    //상태로 사용
    const [now, setNow] = useState(initState)

    const roll = () => {
        console.log("roll")
        const newNow = {...now} //스프레드 연산자 전개연산자! 기존에 있던 now를 복사해서 새로운 객체로 만든 것
        console.log(newNow)
        console.log(now === newNow) //같은 객체가 아님
        newNow.count = now.count + 1
        newNow.value = parseInt((Math.random() * 6) + 1)
        setNow(newNow)
    }

    const reset = () => {
        setNow(initState)
    }

    return (
        <div>
            <h1>COUNT: {now.count}</h1>
            <h1>VALUE: {now.value}</h1>
            <button onClick={() => roll()}>ROLL</button>
            <button onClick={() => reset()}>RESET</button>
        </div>
    );
};

export default Dice;