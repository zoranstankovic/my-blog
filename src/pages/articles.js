import React from "react";
import Layout from "../components/layout";
import usePosts from "../hooks/use-posts";
import PostPreview from "../components/post-preview";

const Artciles = () => {
  const posts = usePosts();
  return (
    <Layout>
      <div className="container container-flex">
        <main>
          <h1>Articles</h1>
          {posts.map(item => (
            <PostPreview key={item.slug} post={item} />
          ))}
        </main>
      </div>
    </Layout>
  );
};

export default Artciles;
