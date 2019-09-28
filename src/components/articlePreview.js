import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import '../styles/index.sass'

const ArticlePreview = ({ title, subtitle, articleUrl, mainPicture, size }) => (
  <Link to={`/article/${articleUrl}`}>
    <figure className="preview_card">
      <Img fluid={ mainPicture.fluid } />
      <figcaption className="preview_card__caption">
        <h5 className="preview_card__title">{ title }</h5>
        <h6 className="preview_card__subtitle">{ subtitle }</h6>
      </figcaption>
    </figure>
  </Link>
)

ArticlePreview.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  articleUrl: PropTypes.string.isRequired,
  mainPicture: PropTypes.object.isRequired,
  size: PropTypes.number.isRequired
}

export default ArticlePreview
