import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLinksList = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  margin-bottom: 2rem;
`;

const StyledItem = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1rem 1fr;
`;

const LinksList = ({ items }) => (
  <StyledLinksList>
    {items.map((item, idx) => (
      <StyledItem key={idx}>
        {item.icon}
        <a href={item.url} target={'_blank'} rel={'noopener noreferrer'}>
          {item.content}
        </a>
      </StyledItem>
    ))}
  </StyledLinksList>
);

LinksList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default LinksList;
