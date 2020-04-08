import React from "react";
import { Link } from "gatsby";

const PostPreview = ({ post }) => (
  <article>
    <header className="title is-4">
      <Link to={post.slug}>{post.title}</Link>
    </header>
    <div className="is-size-5">{post.excerpt}</div>
    <footer className="has-text-grey">
      <div className="is-size-6">
        <span>
          Published <time>25 December 2019</time>
        </span>{" "}
        , <span>reading time need</span>
      </div>
    </footer>
    <Link to={post.slug}>read this post &rarr;</Link>
  </article>
);

export default PostPreview;
