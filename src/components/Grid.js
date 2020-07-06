import React, { useState, useEffect } from 'react'
import './Grid.styles.js'
import { useStyle } from '../context/gridContext'
import { Container, Box } from './Grid.styles.js'

export default function Grid() {

  const [styles] = useStyle()


  return <Container>
    <Box className="item1" />
    <Box className="item2" />
    <Box className="item3" />
    <Box className="item4" />
    <Box className="item5" />
    <Box className="item6" />
    <Box styles={styles} className="item7" />
    <Box className="item8" />
    <Box className="item9" />
    <Box className="item10" />
    <Box className="item11" />
    <Box className="item12" />
    <Box className="item13" />
    <Box className="item14" />
    <Box className="item15" />
    <Box className="item16" />
  </Container>


}