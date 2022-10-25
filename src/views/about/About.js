import React from 'react';
import Layout from "../../components/layout/Layout.js";
import './about.scss';
import cover from "../../assets/img/background-two-kasa.jpg";
import Collapse from "../../components/collapse/Collapse.js";

const About = () => {
    const content = [
        {
            title: "Fiabilité",
            description: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        },
        {
            title: "Respect",
            description: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            title: "Service",
            description: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        },
        {
            title: "Sécurité",
            description: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
    ]
    return (
        <Layout containerClass={"container about-view"}>
            <div className="about-view__cover">
                <img src={cover} alt=""/>
            </div>
            <div className="about-view__content">
                {
                    content.map((item, index) => <Collapse key={`item-${index}`} title={item.title} content={item.description}/>)
                }
            </div>
        </Layout>
    );
};

export default About;
