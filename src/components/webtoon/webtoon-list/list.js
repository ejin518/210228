import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Webtoon from './webtoon'

const Wrapper = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 20px auto 0;
`

const Container = styled.ul`
  padding: 10px 20px;
  width: 100%;
  margin-left: -20px;
  margin-right: -20px;
  overflow: hidden;
`
const Title = styled.h2`
  font-size: 18px;
  color: #000;
  font-weight: bold;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 15px;
`
const Green = styled.span`
  color: #00d564;
  font-weight: bold;
`
function WebtoonList() {
  const [webtoons, setWebtoons] = useState([])

  useEffect(() => {
    const fetchWebtoonList = async () => {
      const response = await fetch('http://localhost:3000/webtoons')
      const data = await response.json()

      setWebtoons(data)
    }

    fetchWebtoonList()
  }, [])

  return (
    <Wrapper>
      <Title>
        전체<Green>웹툰</Green>
      </Title>
      <Container>
        {webtoons.map((webtoon) => {
          return <Webtoon webtoon={webtoon} key={webtoon.id} />
        })}
      </Container>
    </Wrapper>
  )
}

export default WebtoonList
