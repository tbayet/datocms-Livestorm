import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import ArticlePreview from "../components/articlePreview.js"

const IndexPage = ({ data }) => (
  <Layout>
    <div className="articles__container">
      {
        data.allDatoCmsArticle.edges.map(({ node: article }) => (
          <ArticlePreview key={article.id} { ...article } size={50} />
        ))
      }
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
  }
`
