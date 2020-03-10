import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

import LeftSide from './LeftSide';
import RightSide from './RightSide';

import '../styles/layout.scss';

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  @media (max-width: 1100px) {
    & {
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr;
    }
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      bg: file(relativePath: { eq: "bg.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <StyledLayout>
      <BackgroundImage fluid={data.bg.childImageSharp.fluid}>
        <LeftSide />
      </BackgroundImage>
      <RightSide title={data.site.siteMetadata.title}>{children}</RightSide>
    </StyledLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
