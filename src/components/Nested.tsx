import React, { FC } from "react"
import { SuperNested } from "./SuperNested"





export const Nested: FC = () => {
    return <>
        <p>Sono Nester</p>
        <SuperNested ></SuperNested>   
    </>
} 