import React, {useState} from "react";
import "./image-carousel.scss";

const ImageCarousel = ({items, startIndex}) => {
    const [activeIndex, setActiveIndex] = useState((startIndex));

    const carouselStyle = {
        width: `${items.length * 100}%`,
        transform: `translateX(-${activeIndex * (100 / items.length)}%)`
    }

    const handlePrevClick = () => {
        setActiveIndex(() => activeIndex > 0 ?  activeIndex - 1 : items.length - 1);
    }

    const handleNextClick = () => {
        setActiveIndex(() => activeIndex < items.length - 1 ? activeIndex + 1 : 0);
    }

    return (
            <div className={"image-carousel"}>
                <div className={"image-carousel__container"} style={carouselStyle}>
                    {
                        items.map((item, index) => (
                            <img
                                key={`items-${index}`}
                                src={`${item}`}
                                alt={`items-${index}`}
                            />
                        ))
                    }
                </div>
                <div className="image-carousel__commands">
                    <button onClick={handlePrevClick}>
                        <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M70.04 15.7831L62.92 8.70312L23.36 48.3031L62.96 87.9031L70.04 80.8231L37.52 48.3031L70.04 15.7831V15.7831Z" fill="white"/>
                        </svg>
                    </button>
                    <button onClick={handleNextClick}>
                        <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.96 81.3458L33.04 88.4258L72.64 48.8258L33.04 9.22583L25.96 16.3058L58.48 48.8258L25.96 81.3458V81.3458Z" fill="white"/>
                        </svg>
                    </button>
                </div>
                <div className="image-carousel__count">
                    <span>{activeIndex + 1}</span>
                    <span>/</span>
                    <span>{items.length}</span>
                </div>
            </div>
    )
}

export default ImageCarousel;
