/* eslint-disable react/prop-types */
//import "../assets/logo-g8230969e6_640.png"
import logo from '../assets/download.svg';

console.log(logo);


function ImageComponent() {
    return (
        <>
            <div className="picture">
                <div className="logo">
                    <img src={logo} alt="logo" className="whale"/>
                    <h1 className='GDSC'>GDSC</h1>
                </div>
            </div>
        </>
    )
}

export default ImageComponent;