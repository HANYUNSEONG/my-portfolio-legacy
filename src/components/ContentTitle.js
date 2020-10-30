import React from 'react';
import styled from 'styled-components';

const TitleH2 = styled.h2`
    width: 100%;
    text-align: left;
    letter-spacing: .2rem;
    font-size: 1.5rem;
    border-bottom: 1px solid #ececec;
    padding: 1rem 0;
`;

const ContentTitle = ({ children }) => {
    return (
        <TitleH2>{children}</TitleH2>
    )
}

export default ContentTitle;