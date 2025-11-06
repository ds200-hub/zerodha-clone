import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Home() {
    const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies([]); // cookies react cookies se aa rha hai.
    const [username, setUsername] = useState("");
    useEffect(() => {
        const verifyCookie = async () => {
            if (!cookies.token) {
                navigate("/login");
            }
            const { data } = await axios.post("http://localhost:3002", {}, { withCredentials: true });
            const { status, user } = data;
            setUsername(user);
            if (!status) {
                removeCookie("token");
                navigate("/login");

                //  Prevent duplicate toast using toastId
                //     if (!toast.isActive("welcome-toast")) {
                //         toast(`Hello ${user}`, {
                //             position: "top-right",
                //             toastId: "welcome-toast", // unique id to stop duplicates
                //         });
                //     }
                // } else {
                //     removeCookie("token");
                //     navigate("/login");
            }
        }
        verifyCookie();
    }, [cookies, navigate, removeCookie]);

    const Logout = () => {
        removeCookie("token");
        navigate("/signup");

    }
    return (
        <>
            <div className="home_page">
                <h4>
                    Welcome <span>{username}</span>
                </h4>
                <button onClick={Logout}>LOGOUT</button>
            </div>
            <ToastContainer></ToastContainer>
        </>
    );
}

export default Home;