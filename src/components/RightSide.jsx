import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledRightSide = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;

  padding: 3rem;
  @media (max-width: 1100px) {
    & {
      padding: 1rem;
    }
  }
`;

const RightSide = ({ title, children }) => (
  <StyledRightSide>
    <main>{children}</main>
    <footer>
      © {new Date().getFullYear()} {title}
    </footer>
  </StyledRightSide>
);

RightSide.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default RightSide;
