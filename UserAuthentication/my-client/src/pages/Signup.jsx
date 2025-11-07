import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify"; // success ya error ke message show krana.

function Signup() {
    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
        username: "",
    });
    const { email, password, username } = inputValue;
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue, // purani values copy karo
            [name]: value, // sirf badle hue field ko update karo
        });
    };

    const handleError = (err) => {
        if (!toast.isActive("error-toast")) {
            toast.error(err, {
                position: "top-center",
                toastId: "error-toast", // unique id for error
                autoClose: 1000, // optional: toast closes after 3s
            });
        }
    }
    const handleSuccess = (msg) => {
        if (!toast.isActive("success-toast")) {
            toast.success(msg, {
                position: "top-center",
                toastId: "success-toast",
                autoClose: 1000,
            });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("https://zerodha-server-fspq.onrender.com/signup", { ...inputValue }, { withCredentials: true });

            const { success, message } = data;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    window.location.href = "https://zerodha-dashboard-jade.vercel.app" // user ko redirect krr dena 
                }, 3000);
            }
            else {
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
            username: "",
        });
    }

    return (
        <div className="form_container">
            <h2>Signup Account</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} placeholder="Enter your email"
                        onChange={handleOnChange} />
                </div>
                <div>
                    <label htmlFor="username">
                        <input type="text" name="username" value={username} placeholder="Enter your username"
                            onChange={handleOnChange} />
                    </label>
                </div>
                <div>
                    <label htmlFor="password">
                        <input type="password" name="password" value={password} placeholder="Enter your password"
                            onChange={handleOnChange} />
                    </label>
                </div>
                <button type="submit">Submit</button>
                <span>
                    Already have an Account? <Link to={"/login"}>Login</Link>
                </span>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
}

export default Signup;