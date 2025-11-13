import React from "react";
import '../App.css'



export default function LandingPage(){
    return (
        <div className="landingPageContainer">
            <nav>
                <div className="navHeader">
                    <h2>Video Call</h2>
                </div>
                <div className="navList">
                    <p> Join as guest</p>
                    <p>Register</p>
                    <div role="button">
                        <p>Login</p>
                    </div>  
                </div>
            </nav>
            
            <div className="landingMainContainer">
                <div > 
                    <h1> <span style={{color:"#FF9839"}}>Connect</span> with your loved ones</h1>
                    <p>Cover a distance by Video call</p>
                    <div role="button">
                        <a href="/auth">Get started</a>
                    </div>
                </div>
                <div>
                    <img className="mobilePng" src="/mobile.png" alt="Mobile Preview" />
                </div>

            </div>



        </div>
    )
}