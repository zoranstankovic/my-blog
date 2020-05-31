import React from "react";
import { Link } from "gatsby";
import Image from "gatsby-image";

const PostPreview = ({ post }) => {
  const { slug, title, createdAt, image, excerpt } = post.node;
  return (
    <article className="article-latest">
      <pre>
        <code>{JSON.stringify(post, null, 2)}</code>
      </pre>
      <div className="article-body">
        <Link to={slug} className="article-title">
          {title}
        </Link>
        <p className="article-info">
          <time>{createdAt}</time> &middot; 3 min read
        </p>
        <p className="article-text">{excerpt}</p>
        <Link to={slug} className="article-read-more">
          Read more ...
        </Link>
      </div>
    </article>
  );
};
export default PostPreview;
