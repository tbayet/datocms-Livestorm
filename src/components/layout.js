import React from 'react'
import PropTypes from 'prop-types'
import { Location } from '@reach/router';
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { faFacebookF, faTwitter, faGooglePlusG } from "@fortawesome/free-brands-svg-icons";

import ToolBar from './toolbar'

import '../styles/index.sass'

const TemplateWrapper = ({ children }) => (
  <StaticQuery query={graphql`
    query LayoutQuery
    {
      datoCmsFooter {
        signature {
          fixed(width: 200, height: 80, imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsFixed
          }
        }
        avatar {
          fixed(width: 100, height: 100, imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsFixed
          }
        }
        author
      }
      datoCmsSite {
        faviconMetaTags {
          ...GatsbyDatoCmsFaviconMetaTags
        }
        globalSeo {
          siteName
        }
      }
    }
  `}
  render={({ datoCmsFooter, datoCmsSite }) => {
    const socialNetworks = [
      {
        title: 'Twitter',
        icon: faTwitter,
        url: 'https://twitter.com'
      },
      {
        title: 'Facebook',
        icon: faFacebookF,
        url: 'https://facebook.com'
      },
      {
        title: 'Google +',
        icon: faGooglePlusG,
        url: 'https://plus.google.com'
      }
    ]
    return (
      <div className="layout">
        <HelmetDatoCms
          favicon={datoCmsSite.faviconMetaTags}
        />
        <Location>
          {({ location }) => <ToolBar siteName={datoCmsSite.globalSeo.siteName} links={socialNetworks} path={location.pathname} />}
        </Location>
        <section className="layout__app">
          { children }
        </section>
        <footer className="layout__footer">
          <Img
            className="footer__signature"
            fixed={ datoCmsFooter.signature.fixed }
          />
          <Img
            className="footer__avatar"
            fixed={ datoCmsFooter.avatar.fixed }
          />
          <h5>{ datoCmsFooter.author }</h5>
        </footer>
      </div>
    )}
  }
  />
)

TemplateWrapper.propTypes = {
  children: PropTypes.any,
}

export default TemplateWrapper
