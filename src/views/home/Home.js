import React, {useEffect, useState} from 'react';
import './home.scss';
import {getLodges, setPageTitle} from "../../lib/functions.js";
import LodgeCard from "../../components/logde-card/LodgeCard.js";
import Layout from "../../components/layout/Layout.js";
import Loader from "../../components/loader/Loader.js";

const Home = ({lodges}) => {
    const [lodgesList, setLodgesList] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setPageTitle('Accueil');
        getLodges().then((lodges) => {
            setLodgesList(lodges);
            setLoading(false);
        })
    }, []);

    return (
        <Layout containerClass={"container home-view"}>
            <div className="home-view__banner">
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            {loading && <Loader/>}
            {!loading && lodgesList && (
                <div className="home-view__lodges-list">
                    {lodgesList.map(lodge => (
                        <LodgeCard key={lodge.id} data={lodge}/>
                    ))
                    }
                </div>
            )}
        </Layout>
    );
};

export default Home;
