import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import PostPreview from "./post-preview";

export default () => (
  <StaticQuery
    query={latestArticlesQuery}
    render={data => <LatestArticles data={data} />}
  />
);

const LatestArticles = ({ data }) => {
  const { nodes: articles } = data.allMdx;
  return (
    <React.Fragment>
      <div className="latest-post-header">
        <h2>Latest articles</h2>
        <Link to="/articles/" className="all-articles-link">
          All articles &rarr;
        </Link>
      </div>
      {articles.map(item => (
        <PostPreview key={item.frontmatter.slug} post={item} />
      ))}
    </React.Fragment>
  );
};

export const latestArticlesQuery = graphql`
  query latestArticles {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 3) {
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
`;
