import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import ExternalLinks from './home/ExternalLinks';

import '../styles/layout.scss';

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  @media (max-width: 1100px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;

const LeftSide = styled.div`
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
  }
  @media (max-width: 1100px) {
    & {
      padding: 2rem;
    }
    h1 {
      font-size: 3rem;
    }
  }
`;

const RightSide = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;

  padding: 3rem;
  @media (max-width: 1100px) {
    & {
      padding: 2rem;
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
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const title = data.site.siteMetadata.title;
  const fluid = data.bg.childImageSharp.fluid;

  return (
    <StyledLayout>
      <BackgroundImage fluid={fluid}>
        <LeftSide>
          <div>
            <h3>Academia</h3>
            <h1>Javier López Lizaur</h1>
          </div>
          <ExternalLinks />
        </LeftSide>
      </BackgroundImage>
      <RightSide>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} {title}
        </footer>
      </RightSide>
    </StyledLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
