import React from "react";
import ReactDOM from "react-dom/client";
import photo from './images/logo.png';
import wphoto from './images/welcome.jpg';

const myElement = <img className="images_logo" src={photo}></img>;
const welcome = <img className="image_welcome" src={wphoto}></img>;
const user_id = <input type="text" className="user_id" placeholder="User Name"></input>;
const pass_wd = <input type='password' className="usser_pswd" placeholder="Password"></input>;
const fgot_pswd = <span ><a href="https://www.google.com/" className="fgot_passw">Forgot Password</a></span>;
const login_page = <div className="log_image">
    <span>
        <div className="myclass">
            {welcome}
            <h1 className="h1">Welcome back!</h1>
            <h2 className="mycls">
                <span>Start Your Day with US</span>
                <span><h1 className="h2">At Gooogle</h1></span>
            </h2>
        </div>
    </span>
    <span>
        <div className="login_page">
            <div className="image_l" key="logo">
                {myElement}
            </div>
            <div className="user_id_p" key='user_name'>
                {user_id}
            </div>
            <div className="user_p" key="user_password">
                {pass_wd}
            </div>
            <div>
                {fgot_pswd}
            </div>
            <div className="button_log" key="button_login">
                <button className="ebutton" onClick={getvalue}>Login</button></div>
            <div className="bottom">
                <span>
                    Cookie Policy
                </span>
                <span>
                    term Of Use
                </span>
                <span>
                    Privacy Policy
                </span>
            </div>
        </div>
    </span>
</div>
const hast = new Map([['ankit28nov2002', 'abcd']]);
function matchpasswd(a, b) {
    if (hast['ankit28nov2002'] == b) {
        console.log(a);
        console.log(b);
        return true;
    }
    return false;
}

function getvalue() {
    const user_id_val = document.querySelector('.user_id').value;
    const usser_pswd_val = document.querySelector('.usser_pswd').value;
    if (user_id_val == "" && usser_pswd_val == "") alert("Please fill details");
    else if (user_id_val == "") alert("please Enter user Name");
    else if (usser_pswd_val == "") alert("Please Enter Password");
    else if (matchpasswd(user_id_val, usser_pswd_val)) alert("logged in Succesfully");
    else alert("Oops Wrong details");
    console.log(user_id_val);
    console.log(usser_pswd_val);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(login_page);