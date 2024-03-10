import React, { useState } from "react";

function CustomCard(props) {
    const [backgroundColor, setBackgroundColor] = useState(props.initialColor || 'white');

    if(props.className === "item" && "card") {
        var handleDivClick = () => {
        const colors = ['white', 'orange', 'red'];
        const currentIndex = colors.indexOf(backgroundColor);
        const nextIndex = (currentIndex + 1) % colors.length;
        const nextColor = colors[nextIndex];
        setBackgroundColor(nextColor);
    }}

    return (
        <div className={props.className ? `${props.className} card` : "card"} style={{ backgroundColor, color: backgroundColor === 'white' ? 'black' : 'white'}}
            onClick={handleDivClick}>
            {props.children}
        </div>
    )
}

export default CustomCard;
