import React from "react"
import { Link } from "gatsby"
import Nav from "../components/nav"
import HeroContainer from "../components/hero-container"
import containerStyles from "../../src/styles/container.module.scss"
import heroStyles from "../../src/styles/hero.module.scss"
import altPart1 from "../../src/img/heros/alt-pt1.png"

import { Flex, Box } from 'rebass'

export default () => (
  <div>
    <Nav />
    <Flex className={heroStyles.heroContainer}>
      <Box className={heroStyles.heroTitle}>
        <Link to="/contact">
          <h1>America’s Healthiest Grocery Store</h1>
          <p>Let us know what you think</p>
        </Link>
      </Box>
      <Box width={ 1 } className={heroStyles.heroImg}>
        <img src={altPart1} alt="altPart1"/>
      </Box>
    </Flex>

    <HeroContainer>
      <Flex py={5} px={[4, 4, 0]} className={containerStyles.gridFlex}>
        <Box pr={[0, 4]} >
          <h1>About Us</h1>
          <p>We founded in Austin, Texas, when four local businesspeople decided the natural foods industry was ready for a supermarket format. Our founders were John Mackey and Renee Lawson Hardy, owners of Safer Way Natural Foods, and Craig Weller and Mark Skiles, owners of Clarksville Natural Grocery. The original Whole Foods Market opened in 1980 with a staff of only 19 people. It was an immediate success. At the time, there were less than half a dozen natural food supermarkets in the United States. We have grown by leaps and bounds since our first store opened.</p>
        </Box>

        <Box pl={[0, 4]} >
          <h3>The Early Years</h3>
          <p>In 1978, twenty-five-year-old college dropout John Mackey and twenty-one-year-old Renee Lawson (Hardy), borrowed $45,000 from family and friends to open the doors of a small natural foods store called SaferWay in Austin, Texas. When the couple got booted out of their apartment for storing food products there, they decided to simply live at the store. Since it was zoned commercial, there was no shower stall. Instead, they bathed in the Hobart dishwasher, which had an attached water hose.</p>

          <p>Two years later, John and Renee partnered with Craig Weller and Mark Skiles to merge SaferWay with their Clarksville Natural Grocery, resulting in the opening of the original Whole Foods Market on September 20, 1980. At 10,500 square feet and a staff of 19, this store was quite large in comparison to the standard health food store of the time.</p>

          <p>Less than a year later, on Memorial Day in 1981, the worst flood in 70 years devastated the city of Austin. Caught in the flood waters, the stores inventory was wiped out and most of the equipment was damaged. The losses were approximately $400,000 and Whole Foods Market had no insurance. Customers and neighbors voluntarily joined the staff to repair and clean up the damage. Creditors, vendors and investors all provided breathing room for the store to get back on its feet and it re-opened only 28 days after the flood.</p>

          <h3>Expansion</h3>
          <p>Beginning in 1984, Whole Foods Market began its expansion out of Austin, first to Houston and Dallas and then into New Orleans with the purchase of Whole Food Company in 1988. In 1989, we expanded to the West Coast with a store in Palo Alto, California. While continuing to open new stores from the ground up, we fueled rapid growth by acquiring other natural foods chains throughout the 90s: Wellspring Grocery of North Carolina, Bread & Circus of Massachusetts and Rhode Island, Mrs. Goochs Natural Foods Markets of Los Angeles, Bread of Life of Northern California, Fresh Fields Markets on the East Coast and in the Midwest, Florida Bread of Life stores, Detroit area Merchant of Vino stores, and Natures Heartland of Boston.</p>

          <p>Whole Foods Market started our third decade with additional acquisitions of Food for Thought in Northern California and Harrys Farmers Market stores in Atlanta. In 2001, Whole Foods moved into Manhattan, generating a good deal of interest from the media and financial industries. 2002 saw an expansion into Canada and in 2004, Whole Foods Market entered the United Kingdom with the acquisition of seven Fresh & Wild stores.</p>

        </Box>
      </Flex>
    </HeroContainer>

  </div>
)
