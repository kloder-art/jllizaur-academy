import React from 'react';
import styled from 'styled-components';

import cite from '../../../data/static/cite';

const StyledCite = styled.blockquote`
  margin-bottom: 2rem;
`;

const Cite = () => (
  <StyledCite>
    <i>«{cite.content}»</i>
    <br /> <small>{cite.author}</small>
  </StyledCite>
);

export default Cite;
