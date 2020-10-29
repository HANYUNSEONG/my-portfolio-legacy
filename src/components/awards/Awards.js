import React from 'react';

import AwardItem from './AwardItem';
import ContentTitle from '../ContentTitle';

const Awards = ({ awards }) => {
    return (
        <div id="Awards">
            <div className="content_wrap">
                <ContentTitle>수상경력</ContentTitle>
                <div className="contents">
                    {
                        awards && awards.map((data, idx) =>
                            <AwardItem key={idx} {...data} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Awards;