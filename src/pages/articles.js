import React from "react";
import Layout from "../components/layout";
import PostPreview from "../components/post-preview";
import useNotionPosts from "../hooks/use-notion-posts";

const Artciles = () => {
  const posts = useNotionPosts();
  return (
    <Layout>
      <div className="container container-flex">
        <main>
          <h1>Articles</h1>
          {posts.map(item => (
            <PostPreview key={item.node.id} post={item} />
          ))}
        </main>
      </div>
    </Layout>
  );
};

export default Artciles;
