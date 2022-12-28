require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    title: 'OpZoom',
    description: 'App Developers',
    author: 'OpZoom',
    siteUrl: 'https://app.opzoom.com/',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/cost-to-make-an-app/description/', '/cost-to-make-an-app/estimate/', '/cost-to-make-an-app/sign-up/', '/cost-to-make-an-app/design/', '/cost-to-make-an-app/level-of-detail/', '/cost-to-make-an-app/login/'],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: './src/favicon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          'AW-480677404',
          'UA-182227005-1',
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    /*
    {
      resolve: 'gatsby-plugin-hotjar',
      options: {
        includeInDevelopment: false, // optional parameter to include script in development
        id: 2119495,
        sv: 6,
      },
    },
    */
    'gatsby-plugin-sitemap',
    'gatsby-plugin-zopfli',
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: 'my-example-bucket',
        protocol: 'https',
        hostname: 'app.opzoom.com',
      },
    },
    {
      resolve: 'gatsby-plugin-env-variables',
      options: {
        allowList: ['BUILD_ENV', 'API_URL'],
      },
    },
  ],
};
