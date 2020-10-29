import React from 'react';
import styled from 'styled-components';

const TitleH3 = styled.h3`
    width: 100%;
    text-align: left;
    letter-spacing: .5rem;
    font-size: 1.5rem;
    border-bottom: 1px solid #ececec;
    padding: 1rem 0;
`;

const ContentTitle = ({ children }) => {
    return (
        <TitleH3>{children}</TitleH3>
    )
}

export default ContentTitle;