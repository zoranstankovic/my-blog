import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import LatestArticles from "../components/latest-articles";

export default () => {
  return (
    <Layout>
      <Hero />
      <div className="container container-flex">
        <main>
          <LatestArticles />
        </main>
      </div>
    </Layout>
  );
};
