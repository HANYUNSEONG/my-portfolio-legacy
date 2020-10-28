import React, { useEffect } from 'react';

const About = ({ aboutTitle }) => {
    return (
        <div id="About">
            {/* <h3>안녕하세요! 개발자 <small>한윤성</small>입니다.</h3> */}
            <h3>{aboutTitle}</h3>
            <p>더 좋은 개발자가 되기 위해 노력하고 항상 겸손한 마음가짐으로 성장하려 합니다.</p>
        </div>
    )
}

export default About;