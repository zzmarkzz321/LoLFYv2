import React from 'react';
import styled from 'react-emotion';

const Copyright = styled('p')`
    position: absolute;
    bottom: 3%;
    left: 0;
    right: 0;
    
    & span {
        color: red;
    }
`;

export const Footer = () => (
    <footer>
        <Copyright>Made with the <span>blood</span> of Noxus ❤️ </Copyright>
    </footer>
);