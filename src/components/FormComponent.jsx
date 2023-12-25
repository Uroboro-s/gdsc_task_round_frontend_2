/* eslint-disable react/prop-types */

import { useState } from "react";




function FormComponent() {
    const [auth, setAuth] = useState({password: '', confirm_password: ''});
    const [message, setMessage] = useState("");
    

    const checkCount = () => {
        const password = document.getElementById('passwor');
        console.log(password);
        const value = password.value;
        console.log(value);

        let lowerCount = 0;
        let upperCount = 0;
        let numberCount = 0;
        let specialCount = 0;

        for (let i = 0; i < value.length; i++) {
            console.log(value);
            if(value.charCodeAt(i) >= 97 && value.charCodeAt(i) <= 122){
                lowerCount = lowerCount + 1;
            }
            else if(value.charCodeAt(i) >= 65 && value.charCodeAt(i) <= 90) {
                upperCount = upperCount + 1;
            }
            else if(value.charCodeAt(i) >= 48 && value.charCodeAt(i) <= 57) {
                numberCount = numberCount + 1;
            }
            else if(value.charCodeAt(i) == 21 || value.charCodeAt(i) == 23 || value.charCodeAt(i) == 24 || value.charCodeAt(i) == 25 || value.charCodeAt(i) == 26 || value.charCodeAt(i) == 47 || value.charCodeAt(i) == 63 || value.charCodeAt(i) == 64 || value.charCodeAt(i) == 126) {
                specialCount = specialCount + 1;
            }
            else
                continue;
        }

        if(!(lowerCount >=1 && upperCount >= 1 && numberCount >= 1 && specialCount >= 1)){
            setMessage("*Password must contain at least one uppercase, lowercase, digit and special chaarcter")
        }
    }

    const validatePassword = (value) => {

        for (let i = 0; i < value.length; i++) {
            console.log(value);
            if(value.charCodeAt(i) >= 97 && value.charCodeAt(i) <= 122){
                setMessage("");
            }
            else if(value.charCodeAt(i) >= 65 && value.charCodeAt(i) <= 90) {
                setMessage("");
            }
            else if(value.charCodeAt(i) >= 48 && value.charCodeAt(i) <= 57) {
                setMessage("");
            }
            else if(value.charCodeAt(i) == 21 || value.charCodeAt(i) == 23 || value.charCodeAt(i) == 24 || value.charCodeAt(i) == 25 || value.charCodeAt(i) == 26 || value.charCodeAt(i) == 47 || value.charCodeAt(i) == 63 || value.charCodeAt(i) == 64 || value.charCodeAt(i) == 126) {
                setMessage("");
            }
            else
                setMessage("*Password should not contain characters like <, >, . etc. ");
        }
    }

    const matchPassword = (value) => {
        const confirm_password = document.getElementById('confirm-password');
        if(auth.password == value) {
            
            confirm_password.style.border = "1.5px solid green";
        }
        else {
            confirm_password.style.border = "1.5px solid red";
        }
    }

    const updatePassword = (flag, value) => {
        if(flag){           
            validatePassword(value);
            setAuth({...auth, password: value});
        } else {
            setAuth({...auth, confirm_password: value});
            
            matchPassword(value);
        }
    }

    
    return (
        <>
            <form action="#">
                <div className="form left">
                    <p className="form-title">Less gooo!</p>

                    <div className="input">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" name="first-name" id="first-name" required></input>
                    </div>
                    <div className="input">
                        <label htmlFor="last-name">Last name</label>
                        <input type="text" name="last-name" id="last-name"></input>
                    </div>
                    
                    <div className="input">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required></input>
                    </div>
                    
                    <div className="input">
                        <label htmlFor="phone-number">Phone number</label>
                        <input type="text" name="phone-number" id="phone-number" minLength="9" maxLength="9"></input>
                    </div>
                    
                    <div className="input">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="passwor" 
                            id="passwor" 
                            value={auth.password} required
                            onChange={(event) => updatePassword(true, event.target.value)}
                        />
                        <div className="message">{message}</div>
                    </div>
                    
                    <div className="input">
                        <label htmlFor="confirm-password">Confirm password</label>
                        <input 
                            type="password" 
                            name="confirm-password" 
                            id="confirm-password" 
                            value={auth.confirm_password}required
                            onChange={(event) => {updatePassword(false, event.target.value); }}
                        />
                        {/* green tick animation svg */}
                        {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
  <circle className="path circle" fill="none" stroke="#73AF55" strokeWidth="6" strokeMiterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
  <polyline className="path check" fill="none" stroke="#73AF55" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
</svg> */}
                    </div>
                   
                </div>
                <div className="left button"><button type="submit" onClick={() => checkCount()}>Create Account</button></div>
            </form>
        </>
    )
}

export default FormComponent;