import React from 'react';
import SkillsItem from './SkillsItem';

const SkillsItemWrap = ({ level, children }) => {
    return (
        <div className={level}>
            <h3 style={{textTransform: 'uppercase'}}>{level}</h3>
            <div class="contents">
                {children}
            </div>
        </div>
    )
}

export default SkillsItemWrap;