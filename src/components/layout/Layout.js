import React from 'react';
import Footer from "../footer/Footer.js";
import Header from "../header/Header.js";
import {useLocation} from "react-router-dom";

const Layout = ({children, containerClass}) => {
    const location = useLocation();

    return (
        <>
            <Header />
            <main className={`${containerClass}`}>
                {children}
            </main>
            <Footer/>
        </>
    );
};

export default Layout;
