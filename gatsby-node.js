exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      posts: allFile(
        filter: { relativePath: { glob: "posts/**/*.{md,mdx}" } }
        sort: { fields: relativePath, order: DESC }
      ) {
        nodes {
          id
          childMdx {
            frontmatter {
              title
              publish
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("failed to create posts", result.errors)
  }

  const posts = result.data.posts.nodes.filter(
    post => post.childMdx.frontmatter.publish !== false
  )

  posts.forEach(post => {
    actions.createPage({
      path: post.childMdx.frontmatter.slug,
      component: require.resolve("./src/templates/post.js"),
      context: {
        slug: post.childMdx.frontmatter.slug,
      },
    })
  })
}
