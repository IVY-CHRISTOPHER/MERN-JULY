import {useState} from "react";

const Form = (props) => {
    const [ fname, setFname ] = useState("");
    const [ lname, setLname ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password , setPassword ] = useState("");
    const [ confirmpass , setConfirmPass ] = useState("");

    const createUser = (e) => {
        e.preventDefault();

        const newUser = {fname,lname,email,password,confirmpass};
        console.log('Welcome', newUser);
        setFname("");
        setLname("")
        setEmail("");
        setPassword("");
        setConfirmPass("");
    };

    return(
        <>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name:</label>
                <input type="text" value={fname} onChange={ (e) => setFname(e.target.value)} />
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" value={lname} onChange={ (e) => setLname(e.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={ (e) => setPassword(e.target.value)} />
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="password" value={confirmpass} onChange={ (e) => setConfirmPass(e.target.value)} />
            </div>
            <input type="submit" value="Create User"/>
        </form>

        <p>Your Form Data</p>
        <p>First Name: {fname}</p>
        <p>Last Name: {lname}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmpass}</p>
        </>
    )
}

export default Form;