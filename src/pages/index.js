import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import HeroContainer from "../components/hero-container"
import containerStyles from "../../src/styles/container.module.scss"
import productStyles from "../../src/styles/products.module.scss"

import { Flex, Box, Card } from 'rebass'

const ProductPrev = props => (
  <div className={productStyles.productPrev}>
    <h2 className={productStyles.productType}>{props.productType}</h2>
  </div>
)

export default () => (
  <div>
    <Header />
    <HeroContainer>

      <Flex pt={5} pb={5} pl={[4, 0]} pr={[4, 0]} className={containerStyles.gridFlex}>
        <Box pr={[0, 3, 3, 3]} width={[
          1,    // 100% width at the smallest breakpoint
          1/2,  // 50% width at the next breakpoint
          null, // null skips a breakpoint
          2/5   // 25% width at the next
        ]}>
          <Card p={0} mb={4} className={containerStyles.intro}>
            <h1>The Essentials</h1>
            <p>We seek out the finest natural and organic foods available, maintain the strictest quality standards in the industry, and have an unshakeable commitment to sustainable agriculture.</p>
            <Link to="/about">Learn more</Link>
          </Card>

          <Link to="/products/grains/" className={productStyles.productMTall}>
            <Card className={productStyles.grains}>
              <ProductPrev productType="Grains" />
            </Card>
          </Link>

          <Link to="/products/meats" className={productStyles.productS}>
            <Card className={productStyles.meats}>
              <ProductPrev productType="Meats" />
            </Card>
          </Link>

          <Link to="/products/packaged-goods" className={productStyles.productS}>
            <Card className={productStyles.packagedGoods}>
              <ProductPrev productType="Packaged Goods" />
            </Card>
          </Link>

        </Box>

        <Box pl={[0, 3, 3, 3]} width={[
          1,    // 100% width at the smallest breakpoint
          1/2,  // 50% width at the next breakpoint
          null, // null skips a breakpoint
          3/5   // 25% width at the next
        ]}>
        <Link to="/products/produce" className={productStyles.productL}>
            <Card className={productStyles.produce}>
              <ProductPrev productType="Produce" />
            </Card>
          </Link>

          <Link to="/products/dairy-eggs" className={productStyles.productMWide}>
            <Card className={productStyles.dairyEggs}>
              <ProductPrev productType="Dairy & Eggs" />
            </Card>
          </Link>

          <Link to="/products/miscellaneous" className={productStyles.productS}>
            <Card className={productStyles.misc}>
              <ProductPrev productType="Miscellaneous" />
            </Card>
          </Link>

        </Box>
      </Flex>

      <hr />

      <Flex pt={5} pb={5} pl={[4, 0]} pr={[4, 0]}>
        <Box width={[ 1, 10/12 ]} className={containerStyles.textCenter}>
          <h3>About Name</h3>
          <p>We founded in Austin, Texas, when four local businesspeople decided the natural foods industry was ready for a supermarket format. Our founders were John Mackey and Renee Lawson Hardy, owners of Safer Way Natural Foods, and Craig Weller and Mark Skiles, owners of Clarksville Natural Grocery. The original Whole Foods Market opened in 1980 with a staff of only 19 people. It was an immediate success. At the time, there were less than half a dozen natural food supermarkets in the United States. We have grown by leaps and bounds since our first store opened.</p>
        </Box>
      </Flex>

    </HeroContainer>
  </div>
)
