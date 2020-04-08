import React from "react";
import Layout from "../components/layout";
import usePosts from "../hooks/use-posts";
import PostPreview from "../components/post-preview";
import Hero from "../components/hero";

export default () => {
  const posts = usePosts();
  return (
    <Layout>
      <Hero />
      <section className="section">
        <div className="container">
          <h1 className="title">Read my blog</h1>
          <div className="content">
            {posts.map(post => (
              <PostPreview key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
