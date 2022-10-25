import React from 'react';
import Footer from "../footer/Footer.js";
import Header from "../header/Header.js";
import {useLocation} from "react-router-dom";

const Layout = ({children, containerClass, header= true, footer = true}) => {
    const location = useLocation();

    return (
        <>
            {header && <Header/>}
            <main className={`${containerClass}`}>
                {children}
            </main>
            {footer && <Footer/>}
        </>
    );
};

export default Layout;
