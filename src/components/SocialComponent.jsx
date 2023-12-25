
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";

function SocialComponent() {
    return (
        <>
            <div className="separator-line">
                <span className="left-line"><hr></hr></span>
                <span className="or-word">OR</span>
                <span className="right-line"><hr></hr></span>
            </div>
            
            <div className="social-container">
                <div className="social-signups">
                    <a href="#" className="google">
                        <FontAwesomeIcon icon={faGoogle} />
                    </a>
                </div>

                <div className="social-signups">
                    <a href="#" className="github">
                        <FontAwesomeIcon icon={faGithub} className="githu"/>
                    </a>
                </div>

                <div className="social-signups">
                    <a href="#" className="facebook">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </div>

            </div>
        </>
    )
}

export default SocialComponent;