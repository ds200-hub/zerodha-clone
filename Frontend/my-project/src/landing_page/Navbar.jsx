import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg border-bottom " style={{ backgroundColor: "#fff" }}>
            <div class="container">
                <Link class="navbar-brand" to="/">
                    <img src="/images/logo.svg" style={{ width: "25%" }} />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <form class="d-flex" role="search">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                {/* <Link class="nav-link active" aria-current="page" to="/Signup">SignUp</Link> */}
                                <a className='nav-link active' href="https://zerodha-authentication.vercel.app/login" target='_self'>Login</a> {/*_self se hum same tab mein redirect honge aur _blank likhne se dusre tab mein redirect honge */}
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/About">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/Product">Product</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/Pricing">Pricing</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/Support">Support</Link>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar