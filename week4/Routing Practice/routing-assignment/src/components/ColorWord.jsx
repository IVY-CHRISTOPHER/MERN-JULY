import React, {useState} from "react";
import {useParams} from 'react-router-dom'

const ColorWord = (props) => {
    const {word, txtcolor, bckcolor} = useParams()
console.log({word, txtcolor, bckcolor})
    return (
        <div>
            <h1 style={{
                color: `${txtcolor}`,
                backgroundColor: `${bckcolor}`
                }}>The word is: {word}</h1>
        </div>
    )
}

export default ColorWord