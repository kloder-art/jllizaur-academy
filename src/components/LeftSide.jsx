import React from 'react';
import styled from 'styled-components';

import Social from './Social';
import { Link } from 'gatsby';

const StyledLeftSide = styled.div`
  padding: 3rem;
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 10px;
  color: white;
  text-shadow: 0 0 5px black;
  h3 {
    font-size: 2rem;
  }
  h1 {
    font-size: 4rem;
    a {
      color: white;
      text-decoration: none;
    }
  }
  @media (max-width: 1100px) {
    & {
      padding: 1rem;
    }
    h3 {
      font-size: 1.5rem;
    }
    h1 {
      font-size: 2rem;
    }
  }
`;

const LeftSide = () => (
  <StyledLeftSide>
    <div>
      <h3>Academia de arte</h3>
      <h1>
        <Link to={'/'}>Javier López Lizaur</Link>
      </h1>
    </div>
    <Social />
  </StyledLeftSide>
);

export default LeftSide;
