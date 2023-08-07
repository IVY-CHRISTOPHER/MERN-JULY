import React, {useState} from "react";
import {useParams} from 'react-router-dom';

const WordNumber = (props) => {
    const {numword} = useParams()
    if (isNaN(`${numword}`)){
        console.log(isNaN({numword}))
        // const params = useParams()
        // console.log(params);
        return (
            <div>
                <h1>The Word is: {numword}</h1>
            </div>
    )} else {
        return (
            <div>
                <h1>The Number is: {numword}</h1>
            </div>
        )
    }
}
export default WordNumber