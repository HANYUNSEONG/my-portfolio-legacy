import React from 'react';

const AwardItem = ({ title, agency }) => {
    return (
        <div>
            <p>{title}</p>
            <span>{agency}</span>
        </div>
    )
}

export default AwardItem;