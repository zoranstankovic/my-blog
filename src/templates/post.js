import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";
import { Link } from "gatsby";

export const query = graphql`
  query($slug: String!) {
    posts(slug: { eq: $slug }) {
      html
      title
      tags
      publish_date(formatString: "MMM Do, YYYY")
      url
      desc
      cover_image
      read_time
      author
    }
  }
`;

const PostTemplate = ({ data: { posts: post } }) => {
  const { title, publish_date, read_time, html, author } = post;
  return (
    <Layout>
      <div className="container container-flex">
        <h1>{title}</h1>
        <p className="article-info">
          <time>{publish_date}</time> &middot; {read_time} min read &middot;
          posted by {author}
        </p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <Link to="/articles/">&larr; Back to all articles</Link>
      </div>
    </Layout>
  );
};

export default PostTemplate;
