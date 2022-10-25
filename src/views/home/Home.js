import React, {useEffect, useState} from 'react';
import './home.scss';
import {getLodges} from "../../lib/functions.js";
import LodgeCard from "../../components/logde-card/LodgeCard.js";
import Layout from "../../components/layout/Layout.js";

const Home = ({lodges}) => {
    const [lodgesList, setLodgesList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getLodges().then((lodges) => {
            setLodgesList(lodges);
            setLoading(false);
        })
    }, []);

    return (
        <Layout containerClass={"container home-view"}>
            <div className="cover">
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className="lodges-list">
                {loading && <p>Chargement...</p>}
                {!loading && lodgesList.map(lodge => (
                    <LodgeCard key={lodge.id} data={lodge}/>
                ))
                }
            </div>
        </Layout>
    );
};

export default Home;
