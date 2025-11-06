function RightSection({ imageURL, productName, productDescription,  learnMore,styles}) {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6 mt-5 p-5">

                        <h1 style={styles}>{productName}</h1>
                        <p>{productDescription}</p>
                        <div>
                            <a href={learnMore} style={{}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        </div>

                    </div>
                    <div className="col-6 ">
                        <img src={imageURL} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default RightSection;