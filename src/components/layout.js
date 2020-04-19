import React from "react";

import Helmet from "react-helmet";
import Header from "../components/header";
import useSiteMetadata from "../hooks/use-stiemetadata";
import "../styles/styles.css";
import Footer from "./footer";

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <React.Fragment>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="site">
        <Header />
        <div className="content">{children}</div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layout;
