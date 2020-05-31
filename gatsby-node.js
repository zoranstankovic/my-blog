exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const { createPage } = actions;
  const pageTemplate = require.resolve("./src/templates/post.js");
  const result = await graphql(`
    {
      allNotionPageBlog {
        edges {
          node {
            pageId
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("failed to create posts", result.errors);
    return;
  }

  result.data.allNotionPageBlog.edges.forEach(({ node }) => {
    createPage({
      path: `${node.slug}`,
      component: pageTemplate,
      context: {
        pathSlug: `${node.slug}`,
        pageId: node.pageId,
      },
    });
  });
};
