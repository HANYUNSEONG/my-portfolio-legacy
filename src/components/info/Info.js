import React from 'react';

import ContentTitle from '../ContentTitle';

const Info = ({ license, educations, awards }) => {
    return (
        <div id="Info">
            <div className="content_wrap">
                <ContentTitle>Information</ContentTitle>
                <ul>
                    <li>
                        <h5>학력</h5>
                        {
                            educations && educations.map((data, idx) =>
                                <div key={idx}>
                                    <p>{data.name}</p>
                                    <span>{data.major}</span>
                                    <small>{data.date}</small>
                                </div>
                            )
                        }
                    </li>
                    <li>
                        <h5>자격증</h5>
                        {
                            license && license.map((data, idx) =>
                                <div key={idx}>
                                    <p>{data.name}</p>
                                    <span>{data.agency}</span>
                                    <small>{data.date}</small>
                                </div>
                            )
                        }
                    </li>
                    <li>
                        <h5>수상경력</h5>
                        {
                            awards && awards.map((data, idx) =>
                                <div key={idx}>
                                    <p>{data.title}</p>
                                    <span>{data.agency}</span>
                                </div>
                            )
                        }
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Info;