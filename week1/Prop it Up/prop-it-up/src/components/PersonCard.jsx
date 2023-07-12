import {useState} from 'react';

const PersonCard = (props) => {
    const {firstName,lastName,hairColor} = props;

    const [ age , setAge] = useState(props.age);
    const ageOne = () => {
        setAge(age + 1);
    }

    return (
        <div>
            <h1>{lastName},{firstName}</h1>
            <p>age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={ ageOne }>Happy Birthday {firstName}</button>
        </div>

    )
}

export default PersonCard