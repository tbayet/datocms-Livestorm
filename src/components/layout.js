import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"
import { HelmetDatoCms } from 'gatsby-source-datocms'

import '../styles/index.sass'

const TemplateWrapper = ({ children }) => (
  <StaticQuery query={graphql`
    query LayoutQuery
    {
      datoCmsSite {
        faviconMetaTags {
          ...GatsbyDatoCmsFaviconMetaTags
        }
        globalSeo {
          siteName
          titleSuffix
          twitterAccount
          facebookPageUrl
          fallbackSeo {
            title
            description
            twitterCard
            image {
              fluid {
                base64
              }
            }
          }
        }
      }
    }
  `}
  render={({ datoCmsSite }) => (
    <div className="container">
      <HelmetDatoCms
        favicon={datoCmsSite.faviconMetaTags}
        // seo={{tags: datoCmsSite.globalSeo}}
      />
      <div className="container__appbar">
      </div>
      <div className="container__content">
        { children }
      </div>
    </div>
    )}
  />
)

TemplateWrapper.propTypes = {
  children: PropTypes.array,
}

export default TemplateWrapper
