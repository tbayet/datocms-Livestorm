import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import ArticlePreview from "../components/articlePreview.js"

const IndexPage = ({ data }) => (
  <Layout>
    <div className="articles__intro">
      <p>{data.datoCmsSite.globalSeo.fallbackSeo.description}</p>
    </div>
    <div className="articles__container">
      {
        data.allDatoCmsArticle.edges.map(({ node: article }) => (
          <ArticlePreview key={article.id} { ...article } />
        ))
      }
    </div>
    <div className="articles__outro">
      <p>Want to use any of these photos? Go for it!</p>
      <button>Show me what you used them</button>
      <p>for!</p>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allDatoCmsArticle(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          subtitle
          articleUrl
          mainPicture {
            fluid(maxWidth: 1280, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
    datoCmsSite {
      globalSeo {
        fallbackSeo {
          description
        }
      }
    }
  }
`
