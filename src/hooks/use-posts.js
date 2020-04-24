import { graphql, useStaticQuery } from "gatsby";

const usePosts = props => {
  const data = useStaticQuery(graphql`
    {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            title
            author
            slug
            date(formatString: "MMMM Do, YYYY")
            image {
              sharp: childImageSharp {
                fluid(maxWidth: 150, maxHeight: 150) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
          timeToRead
        }
      }
    }
  `);

  return data.allMdx.nodes;
};

export default usePosts;
