import React from 'react';
import './footer.scss';
import PageLogo from "../page-logo/PageLogo.js";

const Footer = () => {
    return (
        <footer className={"container footer"}>
            <PageLogo/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;
