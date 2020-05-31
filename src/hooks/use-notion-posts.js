import { graphql, useStaticQuery } from "gatsby";

const useNotionPosts = props => {
  const data = useStaticQuery(graphql`
    {
      allNotionPageBlog(
        filter: { isDraft: { eq: false } }
        sort: { fields: [indexPage], order: DESC }
      ) {
        edges {
          node {
            id
            title
            slug
            excerpt
            pageIcon
            createdAt(formatString: "MMM Do, YYYY")
          }
        }
      }
    }
  `);

  return data.allNotionPageBlog.edges;
};

export default useNotionPosts;
