import React, {useEffect, useState} from 'react';
import './lodge.scss'
import {useNavigate, useParams} from "react-router-dom";
import {getLodges} from "../../lib/functions.js";
import Slideshow from "../../components/slide-show/Slideshow.js";
import RatingStarts from "../../components/RatingStarts/RatingStarts.js";
import Layout from "../../components/layout/Layout.js";
import Collapse from "../../components/collapse/Collapse.js";
import Loader from "../../components/loader/Loader.js";

const Lodge = () => {
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
        <Layout containerClass={"container lodge-view"}>
            {loading && <Loader/>}
            {!loading && lodgeData && (
                <div className={"lodge-view__container"}>
                    <div className="lodge-view__cover">
                        <Slideshow items={lodgeData.pictures} startIndex={0}/>
                    </div>
                    <div className="lodge-view__content">
                        <div className="lodge-view__titles">
                            <h1 className={"lodge-view__title"}>{lodgeData.title}</h1>
                            <p className={"lodge-view__subtitle"}>{lodgeData.location}</p>
                            <div className="lodge-view__tags">
                                {lodgeData.tags.map((tag, index) => (
                                    <span key={index} className={"lodge-view__tag"}>{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="lodge-view__profiles">
                            <div className="lodge-view__profile">
                                <p className={"lodge-view__profile-name"}>{lodgeData.host.name}</p>
                                <span className="lodge-view__avatar">
                                    <img loading={"lazy"} src={lodgeData.host.picture} alt={lodgeData.host.name}/>
                                </span>
                            </div>
                            <div className="lodge-view__note">
                                <RatingStarts rating={parseInt(lodgeData.rating)}/>
                            </div>
                        </div>
                        <div className="lodge-view__description">
                           <Collapse title={"Description"} content={lodgeData.description}/>
                        </div>
                        <div className="lodge-view__facilities">
                            <Collapse title={"Équipements"} content={lodgeData.equipments}/>
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    );
};

export default Lodge;
