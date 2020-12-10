import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `kevmiester clothings`,
    siteUrl: 'https://gatsby.pizza',
    description:
      'The best Clothing Store for quality hand made designer clothes',
  },

  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      //   name of plugin im adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'ocqq3ytl',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
