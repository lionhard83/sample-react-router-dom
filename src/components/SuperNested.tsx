import React, { FC, useContext } from "react"
import { LangContext } from "./Wrapper"



export const SuperNested: FC = () => {
    console.log('Sto rirenderizzando il componente supernested?')
    const lang = useContext(LangContext);
    return <>
        <p>Sono supernested {lang.title}</p>
        
    </>
} 