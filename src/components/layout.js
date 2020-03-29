import React, { Fragment } from "react"
import Header from "../components/header"

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <main>{children}</main>
  </Fragment>
)

export default Layout
