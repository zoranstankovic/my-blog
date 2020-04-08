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
  console.log(image);
  return (
    <section className="section is-paddingless-horizontal">
      <div className="container grid">
        <article className="media center">
          <figure className="media-left">
            <figure className="image is-128x128">
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
                I am a web developer and I am in love with learing new things,
                the best ways to learn them, and how the brain works.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Hero;
