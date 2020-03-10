import React from 'react';
import styled from 'styled-components';

import social from '../../data/static/social';

const StyledExternalLinks = styled.ul`
  margin: 0;
  list-style: none;
  li {
    float: left;
    margin-right: 1rem;
    a {
      padding: 1rem;
      border-radius: 50%;
      background-color: white;
      color: rgba(0, 0, 0, 0.8);
      text-shadow: 0 0 5px black;
      display: flex;
    }
  }
`;

const ExternalLinks = () => (
  <StyledExternalLinks>
    {social.map((link, idx) => (
      <li key={idx}>
        <a
          href={link.url}
          target={'_blank'}
          rel={'noopener noreferrer'}
          title={link.label}
        >
          {link.icon}
        </a>
      </li>
    ))}
  </StyledExternalLinks>
);

export default ExternalLinks;
