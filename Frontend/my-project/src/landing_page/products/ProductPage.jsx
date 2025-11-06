import Hero from "./Hero.jsx";
import LeftSection from "./LeftSection.jsx";
import RightSection from "./RightSection.jsx";
import Universe from "./Universe.jsx";

function ProductPage() {
    return (
        <>
            <Hero></Hero>
            <LeftSection
                imageURL="/images/kite.png"
                productName="Kite"
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore="">
            </LeftSection >

            <RightSection
                imageURL="/images/console.png"
                productName="Console"
                productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                styles={{ marginTop: "100px" }}
                learnMore="">
            </RightSection>

            <LeftSection
                imageURL="/images/coin.png"
                productName="Coin"
                productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore="">
            </LeftSection >

            <RightSection
                imageURL="/images/kiteconnect.png"
                productName="Kite Connect API"
                productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                learnMore="">
            </RightSection>

            <LeftSection
                imageURL="/images/varsity.png"
                productName="Varsity Mobile"
                productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore="">
            </LeftSection >

            <p className="text-center mt-5">
                Want to know more about our technology stack? Check out Zerodha.Tech blog.
            </p>

            <Universe></Universe>
        </>
    )
}

export default ProductPage;