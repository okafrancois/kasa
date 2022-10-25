import React from 'react';
import './not-founded.scss'
import {Link} from "react-router-dom";
import Layout from "../../components/layout/Layout.js";

const NotFounded = () => {
    return (
        <Layout footer={false} containerClass={"container not-founded-view"}>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link className={"home-link"} to={"/"}>Retourner sur la page d’accueil</Link>
        </Layout>
    );
};

export default NotFounded;
