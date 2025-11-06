function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore,
    googlePlay, appStore }) {
    return (
        <>
            <div className="container ">
                <div className="row">
                    <div className="col-6 ">
                        <img src={imageURL} />
                    </div>
                    <div className="col-6 p-5 mt-5">
                        <h1>{productName}</h1>
                        <p>{productDescription}</p>
                        <div>
                            <a href={tryDemo}>Try Demo</a>
                            <a href={learnMore} style={{marginLeft:"15px"}}>Learn More</a>
                        </div>
                        <div className="mt-3">
                            <a href={googlePlay}><img src="/images/googlePlayBadge.svg" /></a>
                            <a href={appStore} style={{marginLeft:"15px"}} ><img src="/images/appstoreBadge.svg" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LeftSection;