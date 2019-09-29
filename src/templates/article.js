import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <HelmetDatoCms seo={data.datoCmsArticle.seoMetaTags} />
    <article className="article">
      <header className="article__header">
        <Img className="article__image" fluid={data.datoCmsArticle.mainPicture.fluid} />
        <h1 className="article__big_title">{data.datoCmsArticle.title}</h1>
      </header>
      <section className="article__title">
        <h2>{ data.datoCmsArticle.title }</h2>
        <h3>{ data.datoCmsArticle.subtitle }</h3>
      </section>
      <article
        className="article__content"
        dangerouslySetInnerHTML={{
          __html: data.datoCmsArticle.contentNode.childMarkdownRemark.html,
        }}
      />
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
