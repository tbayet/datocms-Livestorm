import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <article className="article">
      <Img fluid={data.datoCmsArticle.mainPicture.fluid} height="400" />
      <HelmetDatoCms seo={data.datoCmsArticle.seoMetaTags} />
      <div className="article__inner">
        <h1 className="article__title">{data.datoCmsArticle.title}</h1>
        <h2 className="article__subtitle">{data.datoCmsArticle.subtitle}</h2>
          {/* {data.datoCmsArticle.gallery.map(({ fluid }) => (
            <img alt={data.datoCmsArticle.title} key={fluid.src} src={fluid.src} />
          ))} */}
        <div
          className="article__content"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsArticle.contentNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </article>
  </Layout>
)

export const query = graphql`
  query ArticleQuery($slug: String!) {
    datoCmsArticle(articleUrl: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      contentNode {
        childMarkdownRemark {
          html
        }
      }
      mainPicture {
        fluid(maxWidth: 1920, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`
