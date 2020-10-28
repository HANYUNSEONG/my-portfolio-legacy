import React from 'react';

import SkillsItemWrap from './SkillsItemWrap';
import SkillsItem from './SkillsItem';

const Skills = ({ skills, levels }) => {
    let list = skills && skills.map((data, idx) => <SkillsItem key={idx} {...data} />);
    let levelList = levels && levels.map((data, idx) => <SkillsItemWrap key={idx} level={data} />)
    return (
        <div id="skills" className="content_wrap">
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