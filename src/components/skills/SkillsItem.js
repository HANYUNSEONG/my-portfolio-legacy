import React from 'react';

const SkillsItem = ({ name, level, logo }) => {
    return (
        <div>
            {/* {name} */}
            <img src={logo} alt={name} title={name} />
        </div>
    )
}

export default SkillsItem;