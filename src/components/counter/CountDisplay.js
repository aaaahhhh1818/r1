import React from 'react';

const CountDisplay = ({num}) => { //props 내려주려고 구조분해 할당
    return (
        <div>
            <h1>{num}</h1>
        </div>
    );
};

export default CountDisplay;