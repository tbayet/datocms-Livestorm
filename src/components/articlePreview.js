import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const ArticlePreview = ({ title, subtitle, articleUrl, mainPicture }) => (
  <figure className="preview_card">
    <Img
      className="preview_card__image"
      fluid={ mainPicture.fluid }
    />
    <Link to={`/article/${articleUrl}`}>
      <figcaption className="preview_card__caption">
          <h5 className="preview_card__title">{ title }</h5>
          <h6 className="preview_card__subtitle">{ subtitle }</h6>
      </figcaption>
    </Link>
  </figure>
)

ArticlePreview.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  articleUrl: PropTypes.string.isRequired,
  mainPicture: PropTypes.object.isRequired,
}

export default ArticlePreview
