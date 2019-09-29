import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane } from "@fortawesome/free-solid-svg-icons";

const ToolBar = ({ links, path, siteName }) => (
  <header className={`layout__toolbar${path === '/' ? ' home' : ''}`}>
    <Link className="toolbar__icon" to="/"><FontAwesomeIcon size="2x" title={siteName} icon={faPlane} /></Link>
    <div className="toolbar__links">
      {
        links.map(link => (
          <a key={link.title} href={link.url} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon size="lg" title={link.title} icon={link.icon} />
          </a>
        ))
      }
    </div>
  </header>
)

ToolBar.propTypes = {
  links: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
  siteName: PropTypes.string.isRequired
}

export default ToolBar
