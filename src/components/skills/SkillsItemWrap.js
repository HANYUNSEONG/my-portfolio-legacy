import React from 'react';

const SkillsItemWrap = ({ level, children }) => {
    return (
        <div className={level}>
            <h3 style={{textTransform: 'uppercase'}}>{level}</h3>
            <div className="contents">
                {children}
            </div>
        </div>
    )
}

export default SkillsItemWrap;