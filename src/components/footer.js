import React from "react"
import footerStyles from "../../src/styles/footer.module.scss"

export default () => (
  <div className={footerStyles.footer}>
    <div className={footerStyles.navContainer}>
      <ul>
        <li className={footerStyles.fb}></li>
        <li className={footerStyles.insta}></li>
      </ul>

      <p>2934 24th St, San Francisco, CA 94110</p>
      <p>415.826.4334</p>
      <p><b>Copyright 2019</b> America’s Healthiest Grocery Store</p>
    </div>
  </div>
)
