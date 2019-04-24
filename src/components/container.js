import React from "react"
import Nav from "../components/nav"
import Footer from "../components/footer"
import containerStyles from "../../src/styles/container.module.scss"

export default ({children}) => (
  <div>
    <Nav />
    <div className={containerStyles.container}>
      {children}
    </div>
    <Footer />
  </div>
)
