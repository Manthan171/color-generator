import React, { useState, useEffect } from "react";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
    const [alert, setAlert] = useState(false);
    const bgColor = rgb.join(',');
    const hexValue = `#${hexColor}`;
    useEffect(() => {
        setTimeout(() => {
            setAlert(false);
        }, 3000);
    }, [alert])

    return <article
        className={`color ${index > 10 && 'color-light'}`}
        style={{ backgroundColor: `rgb(${bgColor})` }}
        onClick={() => {
            setAlert(true);
            navigator.clipboard.writeText(hexValue);
        }}>
        <p className="per-value">{weight}%</p>
        <p className="color-value">#{hexValue}</p>
        {alert && <p className="copied">COPIED TO CLIPBOARD</p>}
    </article>
}

export default SingleColor;