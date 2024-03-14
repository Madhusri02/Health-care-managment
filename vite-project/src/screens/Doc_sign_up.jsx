import React from "react";


export const Doc_signup=()=>{
    const handleLoginClick = () => {

    }
    return(
        <div className="signup">
            <h2>SIGN_UP</h2>
            <form >
                <div>
                    <label>First Name:</label>
                    <input type="text" name="Name"/>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" name="Name"/>
                </div>
                <div>
                    <label>Unique_registration_no:</label>
                    <input type="text" name="Unique_registration_no"/>
                </div>
                <div>
                    <label>Phone_no.:</label>
                    <input type="number" name="Phone_no"/>
                </div>
                <div>
                    <label>Specilisation:</label>
                    <input type="text" name="Specilisation"/>
                </div>
                <div>
                    <label>Preferred language:</label>
                    <input type="number" name="Preferred language"/>
                </div>
                <div>
                    <label>Set your Password:</label>
                    <input type="password" name="set_password"/>
                </div>
                <button type="submit">  Sign_up  </button>
            </form>
            <div>
                Already a member? <button className="b" onClick={handleLoginClick}>Login</button>
            </div>
        </div>
    )
}