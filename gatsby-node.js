exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            slug
            publish
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("failed to create posts", result.errors);
  }

  const posts = result.data.allMdx.nodes.filter(
    post => post.frontmatter.publish !== false
  );

  posts.forEach(post => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve("./src/templates/post.js"),
      context: {
        slug: post.frontmatter.slug,
      },
    });
  });
};
