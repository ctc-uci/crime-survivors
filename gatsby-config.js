// development: use dotenv and .env.* files
// production:  use netlify UI or netlify.toml
if (process.env.NODE_ENV !== 'production') {
  /* eslint-disable global-require */
  // console.log(process.env.NODE_ENV);
  require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
  });
  /* eslint-enable global-require */
}

module.exports = {
  siteMetadata: {
    title: 'title from gatsby-config.js',
    description: 'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@gatsbyjs',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/common/media`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    'gatsby-plugin-sass',
  ],
};
