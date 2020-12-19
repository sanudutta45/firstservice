/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Firstwave Service",
    siteUrl: "https://firstservice.in",
    description: "ISP",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-fontawesome-css",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/firstService.png",
      },
    },
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: "Nunito",
            variants: ["400"],
          },
        ],
      },
    },
  ],
}
