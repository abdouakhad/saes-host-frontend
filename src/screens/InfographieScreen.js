import React from "react";
import Page1 from "../components/infographie/Page1";
import Page2 from "../components/infographie/Page2";
import Page3 from "../components/infographie/Page3";
import Caroussel from "../components/infographie/Caroussel";
import Services from "../components/infographie/Services";
import Footer from "../components/masterweb/Footer";
const InfographieScreen = () => {
    return (
        <>
            <Page1 />
            <Page2 />
            <Page3 />
            <Caroussel />
            <Services />
            <Footer />
        </>
    )
}

export default InfographieScreen;
