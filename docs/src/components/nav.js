import React from "react"
import { Link } from "gatsby"
import logo from "../../src/img/Acme-Logo-color.svg"
import search from "../../src/img/UI/search-icon.svg"
import cart from "../../src/img/UI/cart-icon.png"
import containerStyles from "../../src/styles/container.module.scss"
import { Flex, Box } from 'rebass'


export default () => (
  <div className={containerStyles.nav}>
    <Flex width={[ 1 ]} className={containerStyles.navContainer}>

      <Box width={[ 1, 4/9 ]}>
        <ul>
          <li><Link to="/products"> Products </Link></li>
          <li><Link to="/about/"> About </Link></li>
          <li><Link to="/contact/"> Contact </Link></li>
        </ul>
      </Box>

      <Box width={[ 1, 1/9 ]} className={containerStyles.logo}>
        <Link to="/">
          <img src={logo} alt="logo"/>
        </Link>
      </Box>

      <Box width={[ 1, 4/9 ]} className={containerStyles.searchCart}>
        <ul>
          <li>
            <Link to="/cart">
              <img src={cart} alt="cart"/>
            </Link>
          </li>
          <li>
            <Link to="/search">
              <p>Search</p>
              <img src={search} alt="search" />
            </Link>
          </li>

        </ul>
      </Box>
    </Flex>

  </div>
)
