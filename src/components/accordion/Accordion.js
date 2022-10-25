import React, {useState} from 'react';
import './accordion.scss';

const Accordion = ({title, content}) => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    }

    return (
        <div className={`accordion ${open ? '--is-open' : ''}`}>
            <button className="accordion__title" onClick={handleToggle}>
                <p>{title}</p>
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_67962_101)">
                        <path d="M26.84 23.3466L29.2 20.9733L16 7.78662L2.80002 20.9866L5.16003 23.3466L16 12.5066L26.84 23.3466V23.3466Z" fill="currentColor"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_67962_101">
                            <rect width="32" height="32" fill="white" transform="translate(32) rotate(90)"/>
                        </clipPath>
                    </defs>
                </svg>
            </button>
            <div className="accordion__content">
                {
                    typeof content === 'string' ? <p>{content}</p> : <ul>
                        {content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                }
            </div>
        </div>
    );
};

export default Accordion;
