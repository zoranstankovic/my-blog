import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "me.jpg" }) {
        sharp: childImageSharp {
          fixed(width: 128, height: 128) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);
  return (
    <section className="section is-paddingless-horizontal">
      <div className="container grid">
        <article className="media center">
          <figure className="media-left is-marginless">
            <figure className="image is-128x128" style={{ marginLeft: "0" }}>
              <Img
                fixed={image.sharp.fixed}
                alt="Zoran Stankovic"
                imgStyle={{ borderRadius: "50%" }}
              />
            </figure>
          </figure>
          <div className="media-content">
            <div className="content is-medium">
              <h1>Hi! I'm Zoran</h1>
              <p className>
                I am a web developer, and I am in love with learning new things,
                the best ways to learn them. Also, I love psychology and how the
                brain works. Huge Corgi lover.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Hero;
