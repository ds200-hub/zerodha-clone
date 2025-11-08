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
            [name]: value,
        });
    };

    const handleError = (err) => {
        if (!toast.isActive("error-toast")) {
            toast.error(err, {
                position: "top-center",
                toastId: "error-toast",
                autoClose: 1000,
            });
        }
    };

    const handleSuccess = (msg) => {
        if (!toast.isActive("success-toast")) {
            toast.success(msg, {
                position: "top-center",
                toastId: "success-toast",
                autoClose: 1000,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                // "https://zerodha-server-fspq.onrender.com/login",
                "http://localhost:3002/login",
                { ...inputValue },
                { withCredentials: true }
            );
            const { success, message } = data;
            console.log(data);
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate("/");
                }, 1000);
            } else {
                handleError(message);
            }
        } catch (error) {
            console.log(error);
        }
        setInputValue({
            email: "",
            password: "",
        });
    };

    // Inline CSS styles
    const styles = {
        page: {
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background:
                "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(143,187,204,1) 35%, rgba(0,212,255,1) 100%)",
            fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
        },
        container: {
            backgroundColor: "#fff",
            padding: "2rem 3rem",
            borderRadius: "0.5rem",
            width: "100%",
            maxWidth: "400px",
            boxShadow: "8px 8px 24px 0px rgba(66,68,90,1)",
        },
        heading: {
            marginBlock: "1rem",
            paddingBlock: "0.6rem",
            color: "rgba(0,212,255,1)",
            textAlign: "center",
        },
        form: {
            display: "flex",
            flexDirection: "column",
            gap: "1.4rem",
        },
        formGroup: {
            display: "flex",
            flexDirection: "column",
            gap: "0.3rem",
        },
        label: {
            fontSize: "1.2rem",
            color: "#656262",
        },
        input: {
            border: "none",
            padding: "0.5rem",
            borderBottom: "1px solid gray",
            fontSize: "1.1rem",
            outline: "none",
        },
        button: {
            backgroundColor: "rgba(0,212,255,1)",
            color: "#fff",
            border: "none",
            padding: "0.6rem",
            fontSize: "1rem",
            cursor: "pointer",
            borderRadius: "0.3rem",
        },
        span: {
            fontSize: "0.9rem",
        },
        link: {
            textDecoration: "none",
            color: "rgba(0,212,255,1)",
            marginLeft: "4px",
        },
    };

    return (
        <div style={styles.page}>
            <div style={styles.container}>
                <h2 style={styles.heading}>Login Account</h2>
                <form style={styles.form} onSubmit={handleSubmit}>
                    <div style={styles.formGroup}>
                        <label htmlFor="email" style={styles.label}>
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Enter Your Email"
                            onChange={handleOnChange}
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.formGroup}>
                        <label htmlFor="password" style={styles.label}>
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Enter Your Password"
                            onChange={handleOnChange}
                            style={styles.input}
                        />
                    </div>

                    <button type="submit" style={styles.button}>
                        Submit
                    </button>

                    <span style={styles.span}>
                        Don't have an account?
                        <Link to="/signup" style={styles.link}>
                            Signup
                        </Link>
                    </span>

                    <ToastContainer />
                </form>
            </div>
        </div>
    );
}

export default Login;
