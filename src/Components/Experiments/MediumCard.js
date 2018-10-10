import React from "react";
import "./ArtCard.css";

const MedCard = props => {
    const mediumLoader = url => {
        console.log("[Components/MedCard] Opening article at: ", url);
        window.location.href = url;
    };

    return (
        <div className="rel">
            <h1>Trying to open medium here!</h1>
            <div onClick={() => mediumLoader(props.url)}>
                Click Me to Render Site.
            </div>
        </div>
    );
};

export default MedCard;
