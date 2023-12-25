/* eslint-disable react/prop-types */

import FormComponent from "./FormComponent";
import SocialComponent from "./SocialComponent";

function RightComponent() {
    return (
        <>
            <div className="right">
                <div className="dummy-text left">
                    <p>This is for GDSC Task Round, Technical Task no.2</p>
                    <p>Sign up <em>now</em> to get started</p>
                    <p className="remote-text">You <em>know</em> you want to.</p>
                </div>
                <FormComponent/>
                <SocialComponent/>
                <div className="log-in left"><p>Already have an account?</p><a href="#">Log in</a></div>
            </div>
        </>
    )
}

export default RightComponent;