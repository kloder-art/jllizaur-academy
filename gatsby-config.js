module.exports = {
  siteMetadata: {
    title: 'Academia Javier López Lizaur',
    description: 'Javier López Lizaur Academy Landing Page',
    author: 'Javier López Úbeda <jlopezcur@gmail.com>',
    siteUrl: 'https://academia.jllizaur.art',
  },
  plugins: [
    '@rhysforyou/gatsby-plugin-react-helmet-async',
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Permanent Marker',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Academia Javier López Lizaur',
        short_name: 'Academia J.L.Lizaur',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#222',
        display: 'standalone',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-47318809-4',
        head: false,
        anonymize: true,
        respectDNT: true,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'jllizaur.art',
      },
    },
  ],
};
