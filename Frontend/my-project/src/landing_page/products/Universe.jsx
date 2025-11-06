function Universe() {
    return (
        <>
            <div className="container mt-5">
                <div className="row text-center">
                    <h1>The Zerodha Universe</h1>
                    <p>Extend your trading and investment experience even further with our partner platforms</p>


                    <div className="col-4 p-3 mt-5">
                        <img src="/images/smallcaseLogo.png" style={{height:"60px", width:"200px"}} />
                        <p className="text-small text-muted mt-2">Thematic investment platform</p>
                    </div>

                    <div className="col-4 p-3 mt-5">
                        <img src="/images/streakLogo.png" style={{height:"60px", width:"200px"}}/>
                        <p className="text-small text-muted mt-2">Algo & strategy platform</p>
                    </div>

                    <div className="col-4 p-3 mt-5">
                        <img src="/images/sensibullLogo.svg" style={{height:"60px", width:"200px"}} />
                        <p className="text-small text-muted mt-2">Options trading platform</p>
                    </div>

                    <div className="col-4 p-3 mt-5">
                        <img src="/images/zerodhaFundhouse.png" style={{height:"60px", width:"200px"}} />
                        <p className="text-small text-muted mt-2">Asset Management</p>
                    </div>

                    <div className="col-4 p-3 mt-5">
                        <img src="/images/goldenpiLogo.png" style={{height:"60px", width:"200px"}} />
                        <p className="text-small text-muted mt-2">Bonds trading platform</p>
                    </div>

                    <div className="col-4 p-3 mt-5">
                        <img src="/images/dittoLogo.png" style={{height:"60px", width:"200px"}} />
                        <p className="text-small text-muted mt-2">Insurance</p>
                    </div>

                    <button className='p-2 btn btn-primary fs-5 mt-5 mb-5' style={{width:"20%",margin:"0 auto"}}>Signup Now</button>

                </div>
            </div>
        </>
    );
}

export default Universe;