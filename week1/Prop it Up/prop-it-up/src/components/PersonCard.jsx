import {useState} from 'react';

const PersonCard = ({firstName,lastName,age,hairColor}) => {

    const [ currentAge , setAge] = useState(age);
    const ageOne = () => {
        setAge(currentAge + 1);
    }

    return (
        <div>
            <h1>{lastName},{firstName}</h1>
            <p>age: {currentAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={ ageOne }>Happy Birthday {firstName}</button>
        </div>

    )
}

export default PersonCard