import React, { FC, useEffect, useReducer, useState } from "react";


type SampleParams = {
    name?: string, 
    item?: number,
    index: number;
    currentIndex: number;
    setLastIndex?: Function,
    children?: JSX.Element 
};

// hook si lega ad un componente -> stato -> insieme delle varabili (dinamiche)
// side effect // effetto collaterale
// hool che si lega ad un componente -> 
// effetti collarateli relativi alla creazione del compoente
// e dei cambiamenti di stato di uno o più dei suoi stati 
// hooks -> uncino
// creazione
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


export const Sample: FC<SampleParams> = ({name, item, index, setLastIndex, currentIndex}) => {
    
    // alla creazione del componente viene richiamata!
    // alla ri-renderizzazione del componente!
    // l'array di dipendenze (variabili dipendenti) che richiamano lo useEffect

    const [state, dispatch] = useReducer(reducer, {count: 0});


    return (<>
        <h2>Ciao {name} {item !== undefined ? item : "No items"} {index} {state.count}</h2>
        {/* <button onClick={() => { setLastIndex && setLastIndex(index) }}>Setta l'index qui</button> */}
        {/* <p>Sono io l'index corrente {index === currentIndex ? "Sì": "No"}</p> */}
       
        <button onClick={() => dispatch({type: CountAction.INCREMENT, payload: 0})}>Incrementa counter</button>
        {/* <div onMouseOver={increment}>Passami di sopra</div>
        {counter} */}
        {/* <button onClick={() => { setCounter(counter - 1) }}>Descrementa counter</button> */}
        </>);

        // <Sample key={index} name={name} fn={fnQualsiasi} ></Sample>
} 
