/**
 * 👋 Hey there!
 * This file is the starting point for your new WordPress/Gatsby site! 🚀
 * For more information about what this file is and does, see
 * https://www.gatsbyjs.com/docs/gatsby-config/
 *
 */

module.exports = {
  /**
   * Adding plugins to this array adds them to your Gatsby site.
   *
   * Gatsby has a rich ecosystem of plugins.
   * If you need any more you can search here: https://www.gatsbyjs.com/plugins/
   */
  siteMetadata: {
    title: `Revelation Digital`,
    description: `The csi agency.`,
    author: `@revelationdigital`,
	siteUrl: 'https://revelation.digital/',
  }, 
  plugins: [
    /**
     * The following two plugins are required if you want to use Gatsby image
     * See https://www.gatsbyjs.com/docs/gatsby-image/#setting-up-gatsby-image
     * if you're curious about it.
     */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Revelation Digital`,
        short_name: `Revelation Digital`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#9b03c3`,
        display: `minimal-ui`,
        icon: `static/icon-footer.png`,
      },
    },
	{
        resolve: `gatsby-plugin-advanced-sitemap`,
        options: {
            output: "/sitemap.xml",
        }
    },
	{
      resolve: "gatsby-plugin-segment-analytics",
      options: {
        writeKey: "ifuUfHDtL2QIjMJRaNBN8Bojcqg1ACUK",
      },
    },
	{
    resolve: `gatsby-plugin-nprogress`,
    options: {
      color: "#9b03c3",
      showSpinner: true,
    },
  },
    `gatsby-plugin-react-helmet`,
	{
		resolve: "gatsby-plugin-google-tagmanager",
		options: {
			id: "GTM-P873QJ",
			includeInDevelopment: false,
			defaultDataLayer: { platform: "gatsby" },
		},
	},
	{
		resolve: 'gatsby-plugin-react-helmet-canonical-urls',
		options: {
		  siteUrl: 'https://revelation.digital',
		},
	},{
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Droid Sans', 'Droid Serif']
        }
      }
    },
    
   
{
      resolve: 'gatsby-plugin-htaccess',
      options: {
        custom: `
            ## EXPIRES HEADER CACHING ##
<IfModule mod_expires.c>
ExpiresActive On
ExpiresByType image/jpg "access 1 year"
ExpiresByType image/jpeg "access 1 year"
ExpiresByType image/gif "access 1 year"
ExpiresByType image/png "access 1 year"
ExpiresByType image/svg "access 1 year"
ExpiresByType text/css "access 1 month"
ExpiresByType application/pdf "access 1 month"
ExpiresByType application/javascript "access 1 month"
ExpiresByType application/x-javascript "access 1 month"
ExpiresByType application/x-shockwave-flash "access 1 month"
ExpiresByType image/x-icon "access 1 year"
ExpiresDefault "access 2 days"
</IfModule>
## EXPIRES HEADER CACHING ##
        `,
      },
    },
  ],
}
