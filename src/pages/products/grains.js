import React from "react"
import NavSub from "../../components/nav-sub"
import navSubStyles from "../../../src/styles/nav-sub.module.scss"
import Container from "../../components/container"
import containerStyles from "../../../src/styles/container.module.scss"
import productStyles from "../../../src/styles/products.module.scss"

import { Flex, Box, Card, Text } from 'rebass'

const ProductTile = props => (
  <div className={productStyles.product}>
    <div className={productStyles.productInfo}>

      <Flex width={ 1 } className={productStyles.productInfoTop}>
        <Box width={ 1/2 }>
          <p className={productStyles.productType}>{props.productType}</p>
          <h2 className={productStyles.productName}>{props.productName}</h2>
          <p className={productStyles.productPrice}>{props.productPrice}</p>
        </Box>
        <Box width={ 1/2 } className={productStyles.productAdd}>
          <input className={productStyles.grainsInput} type="" />
        </Box>
      </Flex>
      <Flex width={ 1 } className={productStyles.productInfoBottom}>
        <Flex width={ [1, 1/2] }>
          <Box className={productStyles.productCalc}>
            {props.productCalc}
            <form>
              <label>
                <Box className={productStyles.productWeight}> {props.productWeight} </Box>
                <input className={productStyles.productQuantity} name="quantity" placeholder="0.00" type="number"/>
              </label>
            </form>
          </Box>
        </Flex>
        <Box width={ [1, 1/2] }><span className={productStyles.productTotal}>00 </span></Box>
      </Flex>
    </div>
    <Box className={productStyles.productImg}>
      <img src={props.productImg} alt="" />
    </Box>
  </div>
)

export default () => (
  <Container>
    <Text className={navSubStyles.title}>
      <h2 className={navSubStyles.grains}>Grains</h2>
    </Text>
    <NavSub />
    <Flex px={[4, 0]} py={5}  className={containerStyles.gridFlex}>
      <Box pr={[0, 3, 3, 3]} width={[ 1, 1/2, null, 2/5 ]}>

        <div className={productStyles.productMTall}>
          <Card className={productStyles.grains}>
            <ProductTile
              productType="Grains"
              productName="Kale"
              productPrice="$100"

              productWeight="lbs"
              productTotal="$3.45"
              // productImg="https://bit.ly/2JQaD8K"
            />
          </Card>
        </div>

        <div className={productStyles.productMWide}>
          <Card className={productStyles.grains}>
            <ProductTile
              productType="Grains"
              productName="Kale"
              productPrice="$100"

              productWeight="lbs"
              productTotal="$3.45"
              // productImg="https://bit.ly/2JQaD8K"
            />
          </Card>
        </div>

        <div className={productStyles.productMTall}>
          <Card className={productStyles.grains}>
            <ProductTile
              productType="Grains"
              productName="Kale"
              productPrice="$100 / lbs"

              productWeight="lbs"
              productTotal="$3.45"
              // productImg="https://bit.ly/2JQaD8K"
            />
          </Card>
        </div>

        <div className={productStyles.productMWide}>
          <Card className={productStyles.grains}>
            <ProductTile
              productType="Grains"
              productName="Kale"
              productPrice="$100 / lbs"

              productWeight="lbs"
              productTotal="$3.45"
              // productImg="https://bit.ly/2JQaD8K"
            />
          </Card>
        </div>

      </Box>

      <Box pl={[0, 3, 3, 3]} width={[1, 1/2, null, 3/5]}>

        <div className={productStyles.productL}>
          <Card className={productStyles.grains}>
            <ProductTile
              productType="Grains"
              productName="Kale"
              productPrice="$100 / lbs"

              productWeight="lbs"
              productTotal="$3.45"
              // productImg="https://bit.ly/2JQaD8K"
            />
          </Card>
        </div>

        <div className={productStyles.productMTall}>
          <Card className={productStyles.grains}>
            <ProductTile
              productType="Grains"
              productName="Kale"
              productPrice="$100 / lbs"

              productWeight="lbs"
              productTotal="$3.45"
              // productImg="https://bit.ly/2JQaD8K"
            />
          </Card>
        </div>

        <div className={productStyles.productL}>
          <Card className={productStyles.grains}>
            <ProductTile
              productType="Grains"
              productName="Kale"
              productPrice="$100 / lbs"

              productWeight="lbs"
              productTotal="$3.45"
              // productImg="https://bit.ly/2JQaD8K"
            />
          </Card>
        </div>

      </Box>
    </Flex>
  </Container>
)
