import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { ROUTES } from '../../../constants'

const Wrapper = styled.div`
  float: left;
  width: calc(100% / 3);
  height: 175px;
  padding: 0px 5px;
  overflow: hidden;
  box-sizing: border-box;
  display: inline-block;
  @media (max-width: 1110px) {
    height: 15.76vw;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
    height: 45.78vw;
  }
`

const Container = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
`

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Info = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  box-sizing: border-box;
`

const Title = styled.h2`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  font-size: 20px;
  line-height: 20px;
  font-weight: bold;
  color: #fff;
  text-align: right;
`
const Author = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  text-align: right;
`
const Fav = styled.span`
  display: block;
  margin-top: 50px;
  font-size: 15px;
  font-weight: bold;
  color: #00dc64;
  text-align: right;
`

function Webtoon({ webtoon }) {
  const { id, banner, title, author, favcount } = webtoon

  return (
    <Wrapper>
      <Container to={`${ROUTES.WEBTOON.HOME}/${id}`}>
        <Image src={banner} />
        <Info>
          <Title>{title}</Title>
          <Author>{author}</Author>
          <Fav>{favcount}</Fav>
        </Info>
      </Container>
    </Wrapper>
  )
}

export default Webtoon
