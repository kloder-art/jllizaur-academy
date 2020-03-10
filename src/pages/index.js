import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import LinksList from '../components/LinksList';
import OpenHours from '../components/home/OpenHours';
import Cite from '../components/home/Cite';

import subjects from '../../data/static/subjects';
import info from '../../data/static/info';

const IndexPage = () => (
  <Layout>
    <SEO title={'Inicio'} home={true} />
    <h3>Todas las edades</h3>
    <h2>{subjects.join(', ')}, ...</h2>
    <Cite />
    <h2>Horario de información:</h2>
    <OpenHours />
    <h2>Dirección:</h2>
    <LinksList items={[info.address]} />
    <h2>Contacto: </h2>
    <LinksList items={[info.email, info.phone]} />
  </Layout>
);

export default IndexPage;
