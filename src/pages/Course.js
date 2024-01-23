import React from 'react'

import styled from 'styled-components'

const MenuList = styled.div`
 
`

const PriceList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 34px;
  line-height: 0;
  font-weight: bold;
`

const Span = styled.span`
  font-size: 14px
`


export const Course = () => {
  return (
    <MenuList>
      <div>
        <h1>BODY MASSAGE</h1>
      </div>
      <PriceList>
        <p>30min</p>
        <p>1,980yen<Span>(with tax)</Span></p>
      </PriceList>
      <PriceList>
        <p>60min</p>
        <p>3,278yen<Span>(with tax)</Span></p>
      </PriceList>
      <PriceList>
        <p>90min</p>
        <p>4,950yen<Span>(with tax)</Span></p>
      </PriceList>
      <PriceList>
        <p>120min</p>
        <p>6,490yen<Span>(with tax)</Span></p>
      </PriceList>
    </MenuList>
  )
}
