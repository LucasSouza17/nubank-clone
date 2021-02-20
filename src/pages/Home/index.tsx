import React from 'react';
import { View } from 'react-native';
import Header from '../../components/Header'

import { styles } from './styles'

const Home = () => {
  return (
    <View style={styles.container}>
      <Header name="Lucas" />
      
    </View>
  )
}

export default Home;