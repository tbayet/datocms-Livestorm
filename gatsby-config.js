require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Livestorm`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        previewMode: false,
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
  ],
}
