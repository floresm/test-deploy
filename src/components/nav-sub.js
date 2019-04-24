import React from "react"
import { Link } from "gatsby"
import navSubStyles from "../../src/styles/nav-sub.module.scss"
import { Flex } from 'rebass'

export default () => (

    <Flex className={navSubStyles.navSub}>
      <ul>
        <li><Link to="/products/produce/" className={navSubStyles.produce}>Produce</Link></li>
        <li><Link to="/products/grains/" className={navSubStyles.grains}>Grains</Link></li>
        <li><Link to="/products/meats/" className={navSubStyles.meats}>Meats</Link></li>
        <li><Link to="/products/dairy-eggs/" className={navSubStyles.dairyEggs}>Dairy & Eggs</Link></li>
        <li><Link to="/products/packaged-goods/" className={navSubStyles.packagedGoods}>Packaged Goods</Link></li>
        <li><Link to="/products/miscellaneous/" className={navSubStyles.misc}>Miscellaneous</Link></li>
      </ul>
    </Flex>

)
