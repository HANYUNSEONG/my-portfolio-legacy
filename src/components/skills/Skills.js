import React from 'react';

import SkillsItemWrap from './SkillsItemWrap';
import SkillsItem from './SkillsItem';

import ContentTitle from '../ContentTitle';

const Skills = ({ skills, levels }) => {
    return (
        <div id="Skills" className="content_wrap">
            <ContentTitle>Skills</ContentTitle>
            {
                levels && levels.map((data, idx) => {
                    return (
                        <SkillsItemWrap key={idx} level={data}>
                            {
                                skills && skills.map((item, idx) => {
                                    return item.level === data && <SkillsItem key={idx} {...item} />
                                })
                            }
                        </SkillsItemWrap>
                    )
                })
            }
        </div>
    )
}

export default Skills;