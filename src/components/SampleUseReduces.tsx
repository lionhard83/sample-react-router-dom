import { stat } from "fs";
import React, { FC, useReducer, useState } from "react";


// passiamo a un riduttore lo stato corrente
// state: {count: number}
// action: {type: string, payload: number}

enum CountAction {
    INCREMENT = 'increment',
    DECREMENT = 'decrement',
    RESET = 'reset',
    SET = 'set'
}

const reducer = (
    state: {count: number},  action: {type: CountAction, payload: number}) => {
    switch (action.type) {
        case CountAction.INCREMENT:
            return {count: state.count + 1}
        case CountAction.DECREMENT:
            if (state.count === 0) {
                return {count: 0}
            }
            return {count: state.count - 1}
        case CountAction.RESET:
            return {count: 0}
        case CountAction.SET:
            if (action.payload < 0) {
                return {count: 0}
            }
            return {count: action.payload}

    }
}



export const SampleUseReducer: FC = () =>  {
    // const [counter, setCounter] = useState(0);
    // fattorino
    // riduttore
    const [state, dispatch] = useReducer(reducer, {count: 23});

    return <>
        <p>Sample Use Reducer: {state.count}</p>
        <button onClick={() => dispatch({type: CountAction.INCREMENT, payload: 0})}>Increment</button>
        <button onClick={() => dispatch({type: CountAction.DECREMENT, payload: 0})}>Increment</button>
        <button onClick={() => dispatch({type: CountAction.SET, payload: 4})}>Setta a 4</button>
    </>

}

// state -> {count: 0}

// dispacth (action, payload) -> useReducer -> reducer(state, {action, payload})