import { graphql, useStaticQuery } from "gatsby";

const usePosts = props => {
  const data = useStaticQuery(graphql`
    {
      allPosts(
        filter: { status: { eq: "published" } }
        sort: { fields: [publish_date], order: DESC }
      ) {
        nodes {
          title
          tags
          desc
          status
          url
          read_time
          cover_image
          slug
          publish_date(formatString: "MMMM Do, YYYY")
        }
      }
    }
  `);

  return data.allPosts.nodes;
};

export default usePosts;
