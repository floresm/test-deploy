import React from "react"
import Footer from "../components/footer"
import containerStyles from "../../src/styles/container.module.scss"

export default ({children}) => (
  <div>
    <div className={containerStyles.container}>
      {children}
    </div>
    <Footer />
  </div>
)
