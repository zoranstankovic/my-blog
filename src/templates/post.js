import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";
import { Link } from "gatsby";

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        date(formatString: "MMMM Do, YYYY")
      }
      body
      timeToRead
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <div className="container container-flex">
      <h1>{post.frontmatter.title}</h1>
      <p className="article-info">
        <time>{post.frontmatter.date}</time> &middot; {post.timeToRead} min read
        &middot; posted by {post.frontmatter.author}
      </p>
      <MDXRenderer>{post.body}</MDXRenderer>
      <Link to="/articles/">&larr; Back to all articles</Link>
    </div>
  </Layout>
);

export default PostTemplate;
