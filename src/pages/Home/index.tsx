import React from 'react';
import { View, ScrollView, Text } from 'react-native';

import Header from '../../components/Header';
import Box from '../../components/Box';

import { styles } from './styles'

const Home = () => {
  return (
    <View style={styles.container}>
      <Header name="Lucas" />

      <View style={styles.containerScroll}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Box Infos, Cartão de crédito e conta */}
          <Box icon="credit-card" title="Cartão de Crédito" subtitle="Fatura atual" money="0,00" limit="50,00" />
          <View style={{marginTop: '5%'}}>
          <Box icon="database" title="Conta" subtitle="Saldo disponível" money="82,98"/>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default Home;