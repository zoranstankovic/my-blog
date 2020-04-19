import React from "react";
import { Link } from "gatsby";
import Image from "gatsby-image";

const PostPreview = ({ post }) => {
  const { slug, title, date, image } = post.frontmatter;
  return (
    <article className="article-latest">
      <div className="article-body">
        <Link to={slug} className="article-title">
          {title}
        </Link>
        <p className="article-info">
          <time>{date}</time> &middot; {post.timeToRead} min read
        </p>
        <p className="article-text">{post.excerpt}</p>
        <Link to={slug} className="article-read-more">
          Read more ...
        </Link>
      </div>
      <div className="article-image">
        <Image fluid={image.sharp.fluid} alt={title} />
      </div>
    </article>
  );
};
export default PostPreview;
