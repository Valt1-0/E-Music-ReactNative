import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../assets/img/logo.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 225,
    height: 135.5,
    marginBottom: 8,
  },
})
