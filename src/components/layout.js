import React from "react";

import "../components/styles.scss";
import Helmet from "react-helmet";
import Header from "../components/header";
import useSiteMetadata from "../hooks/use-stiemetadata";

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
