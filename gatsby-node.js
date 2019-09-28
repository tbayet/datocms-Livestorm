const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsArticle {
          edges {
            node {
              articleUrl
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsArticle.edges.map(({ node }) => {
        createPage({
          path: `article/${node.articleUrl}`,
          component: path.resolve(`./src/templates/article.js`),
          context: {
            slug: node.articleUrl,
          },
        })
      })
      resolve()
    })
  })
}
