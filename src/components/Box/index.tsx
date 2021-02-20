import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Feather from '@expo/vector-icons/build/Feather'

import { styles } from './styles'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RectButton } from 'react-native-gesture-handler';

type BoxProps = {
  icon: String | any
  title: String
  subtitle: String
  money: String
  limit?: String
}

const Box = ({ icon, title, subtitle, money, limit }: BoxProps) => {

  const [moneyColor, setMoneyColor] = useState("")

  useEffect(() => {
    if (!limit) {
      setMoneyColor("#000")
    } else {
      setMoneyColor("#4a9bf7")
    }
  }, [])

  return (
    <RectButton style={styles.box} activeOpacity={1}>

      {/* Primeira linha */}
      <View style={styles.firstLine}>
        <Feather name={icon} size={wp('6%')} color="#8b8b8b" />
        <Text style={{ marginLeft: wp('5%'), color: "#8b8b8b", fontSize: wp('4%'), fontFamily: 'Regular', marginTop: wp('1.2%') }}>{title}</Text>
      </View>

      {/* Segunda linha */}
      <View style={styles.secondLine}>
        <Text style={{ color: "#8b8b8b", fontSize: wp('3%'), fontFamily: 'Regular', }}>{subtitle}</Text>
      </View>

      {/* Terceira linha (Preço em azul) */}
      <View>
        <Text style={{ color: moneyColor, fontSize: wp('7%'), fontFamily: 'SemiBold' }}>R$ {money}</Text>
      </View>

      {/* Quarta linha (Limite disponivel) */}
      {limit && (
        <View style={styles.fourthLine}>
          <Text style={{ color: '#000', fontSize: wp('3.5%'), fontFamily: 'Regular' }}>Limite disponível <Text style={{ color: "#017e20", fontFamily: 'SemiBold' }}>R$ {limit}</Text></Text>
        </View>
      )}

    </RectButton>
  )
}

export default Box;