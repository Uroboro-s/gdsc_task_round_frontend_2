

function FormComponent() {
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
                        <input type="password" name="passwor" id="passwor" required></input>
                    </div>
                    
                    <div className="input">
                        <label htmlFor="confirm-password">Confirm password</label>
                        <input type="password" name="confirm-password" id="confirm-password" required></input>
                    </div>
                </div>
                <div className="left button"><button type="button">Create Account</button></div>
            </form>
        </>
    )
}

export default FormComponent;