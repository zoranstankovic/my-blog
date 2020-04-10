import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const About = () => (
  <Layout>
    <h1>About me</h1>
    <p>
      For a long time, I planned to start my blog, but I always experienced a
      fear of writing and expressing myself this way. Now the time had come. I
      will use this blog as my learning diary and the way to improve my writing
      skills. I am a web developer but soon planning to do mobile development
      and to learn Flutter (hope you will soon read here more posts about
      Flutter and some short tutorials on how to use it). Besides this, I am
      planning to write about the tools I am using in my daily programming life.
      I am in love with learning new things, the best ways to learn them, and
      how the brain works. I also like to read books. So here you will also find
      some book review posts.
    </p>
    <Link to="/">Go back to Home &rarr;</Link>
  </Layout>
);

export default About;
