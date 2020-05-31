import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";
import { Link } from "gatsby";
import notionRendererFactory from "gatsby-source-notionso/lib/renderer";
import NotionBlockRenderer from "../components/notion-block-renderer";

const PostTemplate = ({ data, pageContext }) => {
  const notionRenderer = notionRendererFactory({
    notionPage: data.notionPageBlog,
  });
  return (
    <Layout>
      <div className="container container-flex">
        <h1>{data.notionPageBlog.title}</h1>
        <p className="article-info">
          <time>{data.notionPageBlog.createdAt}</time> &middot; post.timeToRead
          min read &middot; posted by post.frontmatter.author
        </p>
        <NotionBlockRenderer
          data={data}
          renderer={notionRenderer}
          debug={true}
        />
        <Link to="/articles/">&larr; Back to all articles</Link>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($pageId: String!) {
    notionPageBlog(pageId: { eq: $pageId }) {
      blocks {
        blockId
        blockIds
        type
        attributes {
          att
          value
        }
        properties {
          propName
          value {
            text
            atts {
              att
              value
            }
          }
        }
      }
      pageId
      slug
      title
      isDraft
      id
      indexPage
      createdAt(formatString: "MMM Do, YYYY")
    }
  }
`;

export default PostTemplate;
