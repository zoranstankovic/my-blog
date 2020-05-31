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
  const { edges: articles } = data.allNotionPageBlog;
  return (
    <React.Fragment>
      <div className="latest-post-header">
        <h2>Latest articles</h2>
        <Link to="/articles/" className="all-articles-link">
          All articles &rarr;
        </Link>
      </div>
      {articles.map(item => (
        <PostPreview key={item.node.slug} post={item} />
      ))}
    </React.Fragment>
  );
};

export const latestArticlesQuery = graphql`
  query latestArticles {
    allNotionPageBlog(
      filter: { isDraft: { eq: false } }
      sort: { fields: [indexPage], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          title
          slug
          excerpt
          pageIcon
          createdAt(formatString: "MMM Do, YYYY")
        }
      }
    }
  }
`;
