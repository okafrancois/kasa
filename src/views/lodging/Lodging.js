import React, {useEffect, useState} from 'react';
import './lodging.scss'
import {useNavigate, useParams} from "react-router-dom";
import {getLodges, getOneLodge} from "../../lib/functions.js";
import Slideshow from "../../components/slide-show/Slideshow.js";
import RatingStarts from "../../components/RatingStarts/RatingStarts.js";
import Layout from "../../components/layout/Layout.js";
import Collapse from "../../components/collapse/Collapse.js";

const Lodging = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [lodgeData, setLodgeData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getLodges().then((lodges) => {
            const lodge = lodges.find((lodge) => lodge.id === id);
            if (lodge) {
                setLodgeData(lodge);
                setLoading(false);
            } else {
                navigate('/404');
            }
        })
    }, [id, navigate])

    return (
        <Layout containerClass={"container lodging-view"}>
            {loading && <p>Chargement...</p>}
            {!loading && lodgeData && (
                <div className={"lodge-item"}>
                    <div className="lodge-item__cover">
                        <Slideshow items={lodgeData.pictures} startIndex={0}/>
                    </div>
                    <div className="lodge-item__content">
                        <div className="lodge-item__titles">
                            <h1 className={"lodge-item__title"}>{lodgeData.title}</h1>
                            <p className={"lodge-item__subtitle"}>{lodgeData.location}</p>
                            <div className="lodge-item__tags">
                                {lodgeData.tags.map((tag, index) => (
                                    <span key={index} className={"lodge-item__tag"}>{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="lodge-item__profiles">
                            <div className="lodge-item__profile">
                                <p className={"lodge-item__profile-name"}>{lodgeData.host.name}</p>
                                <span className="lodge-item__avatar">
                                    <img src={lodgeData.host.picture} alt={lodgeData.host.name}/>
                                </span>
                            </div>
                            <div className="lodge-item__note">
                                <RatingStarts rating={parseInt(lodgeData.rating)}/>
                            </div>
                        </div>
                        <div className="lodge-item__description">
                           <Collapse title={"Description"} content={lodgeData.description}/>
                        </div>
                        <div className="lodge-item__facilities">
                            <Collapse title={"Équipements"} content={lodgeData.equipments}/>
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    );
};

export default Lodging;
