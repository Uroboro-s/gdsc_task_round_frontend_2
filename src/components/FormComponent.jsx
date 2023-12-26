/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */

import { useState } from "react";
import {Checkmark} from 'react-checkmark';


function CrossMark() {
    return (
        <>
            <svg className="cross__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
  		        <circle className="cross__circle" cx="26" cy="26" r="25" fill="none"/>
				<path className="cross__path cross__path--right" fill="none" d="M16,16 l20,20" />
                <path className="cross__path cross__path--right" fill="none" d="M16,36 l20,-20" />
		   
		    </svg>
        </>
    )
}

function TickMark() {
    return (
        <>
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" style={{marginLeft: "5px"}}>
                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"></circle>
                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path>
            </svg>
        </>
    )
}


function FormComponent() {
    const [auth, setAuth] = useState({password: '', confirm_password: ''});
    const [message, setMessage] = useState("");
    const [check, setCheck] = useState(false);

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
            setCheck(true);
            confirm_password.style.border = "1.5px solid green";
        }
        else {
            setCheck(false)
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

    const checkMark = () => {

        if(check){
            return (
                <TickMark/>
            )
        }
        else if(!check && auth.password != "" && auth.confirm_password != "") {
            return (
                <CrossMark/>
            )
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
                        <input type="tel" name="phone-number" id="phone-number" minLength="9" maxLength="9"></input>
                    </div>
                    
                    <div className="input">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="passwor" 
                            id="passwor" 
                            minLength={8}
                            value={auth.password} required
                            onChange={(event) => updatePassword(true, event.target.value)}
                        />
                        <div className="message">{message}</div>
                    </div>
                    
                    <div className="input">
                        <div className="labelandcheck"><label htmlFor="confirm-password">Confirm password</label>{checkMark()}</div>
                        <input 
                            type="password" 
                            name="confirm-password" 
                            id="confirm-password" 
                            minLength={8}
                            value={auth.confirm_password}required
                            onChange={(event) => {updatePassword(false, event.target.value); }}
                        />
                        
                    </div>
                   
                </div>
                <div className="left button"><button type="submit" onClick={() => checkCount()}>Create Account</button></div>
            </form>
        </>
    )
}

export default FormComponent;