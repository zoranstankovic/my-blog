import React from "react";
import { Link } from "gatsby";
import Image from "gatsby-image";

const PostPreview = ({ post }) => (
  <article className="media">
    <figure className="media-left" style={{ marginLeft: "0" }}>
      <p className="image is-128x128">
        <Image fluid={post.image.sharp.fluid} alt={post.title} />
      </p>
    </figure>
    <div className="media-content">
      <div className="content">
        <header className="title is-4">
          <Link to={post.slug}>{post.title}</Link>
        </header>
        <div className="is-size-5">{post.excerpt}</div>
        <footer className="has-text-grey">
          <div className="is-size-6">
            <span>
              Published <time>{post.date}</time>
            </span>{" "}
            , <span>reading time need</span>
          </div>
        </footer>
        <Link to={post.slug}>read this post &rarr;</Link>
      </div>
    </div>
  </article>
);

export default PostPreview;
