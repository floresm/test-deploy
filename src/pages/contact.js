import React from 'react'
import Container from "../components/container"
import containerStyles from "../../src/styles/container.module.scss"
import contactStyles from "../../src/styles/contact.module.scss"

import {
  Flex,
  Box
} from 'rebass'

export default () => (

  <Container>
    <Flex px={[4, 4, 0]} className={containerStyles.gridFlex}>
      <Box py={5} width={[1, 1/2]} pr={[0, 4]} className={contactStyles.contactUs}>
        <h1>Visit Us</h1>

        <p><b>Business hours</b></p>
        <p>Monday - Sunday<br/>
        7am - 8pm PST</p>

        <p><b>Call us</b></p>
        <p>(415) 826 - 4334</p>

        <p><b>E-mail us</b></p>
        <p>healthiest@gmail.com</p>
      </Box>

      <Box width={[1, 1/2]} py={5} pl={[0, 4]} className={contactStyles.contactForm}>
        <h1>Contact Us</h1>

        <form>
          <input type="text" placeholder="Name"/>
          <input type="text" placeholder="Email"/>
          <input type="text" placeholder="How can we help you?"/>
          <input type="button" value="Submit" />
        </form>
      </Box>
    </Flex>

  </Container>
)
