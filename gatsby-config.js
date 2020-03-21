module.exports = {
  siteMetadata: {
    title: `Is COVID-19 over yet?`,
    description: `Tracking the recovery from the global coronavirus outbreak`,
    author: `Arthur Lee`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-4113512-9",
        head: false,
      },
    },
  ],
};
