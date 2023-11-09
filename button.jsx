// import React, { useState } from 'react';

// function Counter() {
//     const [count, setCount] = useState(0);

//     const incrementCount = () => {
//         setCount((prevState) => prevState + 1);
//     };

//     const decrementCount = () => {
//         setCount((prevState) => prevState - 1);
//     };

//     return (
//         <div>
//             <p>Count: {count}</p>
//             <button onClick={incrementCount}> Increment+</button>
//             <button onClick={decrementCount}> Decrement-</button>
//         </div>
//     );
// }

import React, { useMemo, useReducer } from 'react';

const initialState = {
    isClicked: false,
    isDisabled: false,
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'CLICK' :
            return {
                ...state,
                isClicked:true,
            };
        case 'DISABLE' :
            return {
                ...state,
                isDisabled: true,
            }
        case 'ENABLE' : 
            return {
                ...state,
                isDisabled: false,
            };
            default:
                return state
    }
};

const Button = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleClick = () => {
        if(!state.isDisabled) {
            dispatch({ type: 'CLICK'});
        }
    };

    const handleDisable = () => {
        dispatch({ type: 'DISABLE'});
    };

    const handleEnable = () => {
        dispatch({ type: 'ENABLE'});
    };

    const buttonElement = useMemo(() => {
        return (
            <button 
                onClick={handleClick}
                disabled={state.isDisabled}
                style={{ backgroundColor: state.isClicked ? 'green' : 'red'}}
                >
                {state.isClicked ? 'Clicked' : 'Click Me'}
                </button>
        );
    }, [state.isClicked, state.isDisabled]);
    return buttonElement;
};

export default Button;
