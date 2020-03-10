import React from 'react';
import { FaPhone, FaEnvelopeOpenText } from 'react-icons/fa';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import OpenHours from '../components/home/OpenHours';

const StyledContact = styled.ul`
  margin: 0 0 4rem;
  list-style: none;
  li {
    a {
      display: flex;
      align-items: center;
    }
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title={'Inicio'} />
    <blockquote style={{ marginBottom: '2rem' }}>
      «La finalidad del arte es dar cuerpo a la esencia secreta de las cosas, no
      el copiar su apariencia»
      <br />{' '}
      <small>
        <i>Aristóteles (384 a. C. - 322 a. C.)</i>
      </small>
    </blockquote>
    <h2>Horario:</h2>
    <OpenHours />
    <h2>Dirección:</h2>
    <p>
      <a href={'#'} target={'_blank'} rel={'noopener noreferrer'}>
        Calle Altamira, 54, Bajo Derecha. <br />
        04005 Almería.
      </a>
    </p>
    <h2>Contacto: </h2>
    <StyledContact>
      <li>
        <a href={'mailto:javierlopezlizaur15@gmail.com'}>
          <FaEnvelopeOpenText /> &nbsp; javierlopezlizaur15@gmail.com
        </a>
      </li>
      <li>
        <a href={'tel:+34670884415'}>
          <FaPhone /> &nbsp; +34 670 88 44 15
        </a>
      </li>
    </StyledContact>
  </Layout>
);

export default IndexPage;
