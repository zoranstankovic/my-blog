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
  const { nodes: articles } = data.allPosts;
  return (
    <React.Fragment>
      <div className="latest-post-header">
        <h2>Latest articles</h2>
        <Link to="/articles/" className="all-articles-link">
          All articles &rarr;
        </Link>
      </div>
      {articles.map(item => (
        <PostPreview key={item.slug} post={item} />
      ))}
    </React.Fragment>
  );
};

export const latestArticlesQuery = graphql`
  query latestArticles {
    allPosts(
      filter: { status: { eq: "published" } }
      sort: { fields: [publish_date], order: DESC }
      limit: 3
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
`;
