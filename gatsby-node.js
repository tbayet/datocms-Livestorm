const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve) => {
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
      result.data.allDatoCmsArticle.edges.forEach(({ node }) => {
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
