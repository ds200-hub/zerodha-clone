import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";


function Login() {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
    });
    const { email, password } = inputValue;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value
        });
    }
    const handleError = (err) => {
        if (!toast.isActive("error-toast")) {
            toast.error(err, {
                position: "top-center",
                toastId: "error-toast", // unique id for error
                autoClose: 1000, // optional: toast closes after 3s
            });
        }
    };
    const handleSuccess = (msg) => {
        if(!toast.isActive("success-toast")){
            toast.success(msg,{
                position: "top-center",
                toastId: "success-toast",
                autoClose: 1000,
            });
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:3002/login",
                { ...inputValue },
                { withCredentials: true }
            );
            console.log(data);
            const { success, message } = data;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    window.location.href = "http://localhost:5175";
                }, 1000);
            } else {
                handleError(message);
            }
        }
        catch (error) {
            console.log(error);
        }
        setInputValue({
            ...inputValue,
            email: "",
            password: "",
        });
    }

    return (
        <>
            <div className="form_container">
                <h2>Login Account</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={email} placeholder="Enter Your Email"
                            onChange={handleOnChange} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={password} placeholder="Enter Your Password"
                            onChange={handleOnChange} />
                    </div>
                    <button type="submit" >Submit</button>
                    <span>
                        Don't have an account? <Link to={"/signup"}>Signup</Link>
                    </span>
                    <ToastContainer></ToastContainer>
                </form>
            </div>
        </>
    );
}


export default Login;