exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allPosts(filter: { status: { eq: "published" } }) {
        nodes {
          slug
          url
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("failed to create posts", result.errors);
  }

  result.data.allPosts.nodes.forEach(({ slug, url }) => {
    actions.createPage({
      path: url,
      component: require.resolve("./src/templates/post.js"),
      context: {
        slug: slug,
      },
    });
  });
};
