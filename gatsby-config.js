module.exports = {
  siteMetadata: {
    title: `Marek Melichar - tvorba webových stránek Brno`,
  },
  plugins: [
      `gatsby-plugin-react-helmet`,
      {
      resolve: `gatsby-plugin-favicon`,
      options: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        twitter: false,
        yandex: false,
        windows: false
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-61499082-1',
        // Setting this parameter is optional
        // anonymize: true
      },
    },
  ],
}
