import React from "react";
import { Link } from "gatsby";
import Image from "gatsby-image";

const PostPreview = ({ post }) => {
  const { slug, title, image, url, read_time, publish_date, desc } = post;
  return (
    <article className="article-latest">
      <div className="article-body">
        <Link to={url} className="article-title">
          {title}
        </Link>
        <p className="article-info">
          <time>{publish_date}</time> &middot; {read_time} min read
        </p>
        <p
          className="article-text"
          dangerouslySetInnerHTML={{ __html: desc }}
        ></p>
        <Link to={url} className="article-read-more">
          Read more ...
        </Link>
      </div>
      <div className="article-image"></div>
    </article>
  );
};
export default PostPreview;
