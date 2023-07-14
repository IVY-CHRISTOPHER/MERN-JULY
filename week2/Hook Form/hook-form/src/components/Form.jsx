import {useState} from "react";

const Form = (props) => {
    const [ fname, setFname ] = useState("");
    const [ fnameError, setFnameError] = useState("");

    const [ lname, setLname ] = useState("");
    const [ lnameError, setLnameError] = useState("");

    const [ email, setEmail ] = useState("");
    const [ emailError, setEmailError] = useState("");

    const [ password , setPassword ] = useState("");
    const [ passwordError, setPasswordError] = useState("");

    const [ confirmpass , setConfirmPass ] = useState("");
    const [ confirmError, setConfirmError] = useState("");

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

    const handleFname = (e) => {
        setFname(e.target.value);
        if(e.target.value.length < 2) {
            setFnameError("First Name must be at least 2 characters!");
        } else {
            setFnameError("")
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters!");
        } else {
            setEmailError("")
        }
    }

    const handleLname = (e) => {
        setLname(e.target.value);
        if(e.target.value.length < 2) {
            setLnameError("Last Name must be at least 2 characters!");
        } else {
            setLnameError("")
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters!");
        } else if(e.value.password != confirmpass){
            setPasswordError("Password and Confirm Password must match.")
        } else {
            setPasswordError('')
        }
    }

    const handleConfirmPass = (e) => {
        setConfirmPass(e.target.value);
        if(e.target.value.length < 8) {
            setConfirmError("Last Name must be at least 8 characters!");
        } else if(e.target.value != password){
            setConfirmError("Password and Confirm Password must match.")
        } else {
            setConfirmError('')
        }
    }

    return(
        <>
        <form onSubmit={ (e) => e.preventDefault() }>
            <div>
                <label>First Name:</label>
                <input type="text" value={fname} onChange={ handleFname } />
                {
                    fname.length < 2 && fname.length > 0?
                    <p>First name must be at least 2 characters long!</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" value={lname} onChange={ handleLname } />
                {
                    lname.length < 2 && lname.length > 0 ?
                    <p>Last name must be at least 2 characters long!</p> :
                    ''
                }
            </div>
            <div>
                <label>Email:</label>
                <input type="text" value={email} onChange={ handleEmail } />
                {
                    email.length < 5 && email.length > 0 ?
                    <p>Email must be at least 5 characters long!</p> :
                    ''
                }
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={ handlePassword} />
                {
                    password.length < 8 && password.length > 0 ?
                    <p>password must be at least 8 characters long!</p> :
                    ''
                }{
                    password != confirmpass ?
                    <p>password and confirm password do not match</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="password" value={confirmpass} onChange={ handleConfirmPass } />
                {
                    password != confirmpass ?
                    <p>password and confirm password do not match</p> :
                    ''
                }
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