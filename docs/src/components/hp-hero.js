import React from "react"
import { Link } from "gatsby"
import heroStyles from "../../src/styles/hero.module.scss"
import { Flex, Box } from 'rebass'
import heroPart1 from "../../src/img/heros/hero-pt1.png"
import heroPart2 from "../../src/img/heros/hero-pt2.png"

export default () => (
  <Flex width={ 1 } className={heroStyles.heroContainer}>
    <Box width = { 1 } className={heroStyles.heroTitle}>
      <Link to="/products">
        <h1>America’s Healthiest Grocery Store</h1>
        <p>See whats in season</p>
      </Link>
    </Box>
    <Box width={ 1/2 }>
      <img src={heroPart1} alt="hero-pt1"/>
    </Box>
    <Box width={ 1/2 }>
      <img src={heroPart2} alt="hero-pt2"/>
    </Box>
  </Flex>

)
