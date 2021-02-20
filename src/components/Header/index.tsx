import React from 'react';
import { View, Text } from 'react-native';
import Feather from '@expo/vector-icons/build/Feather'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { styles } from './styles';

type HeaderProps = {
    name: String
}

const Header = ({ name }: HeaderProps) => {
    return (
        <View style={styles.header}>
            <Text style={styles.name}>Olá, {name}</Text>
            <View style={styles.containerIcons}>
                <View style={styles.icon}>
                    <Feather name="eye" size={wp('5.5%')} color="white" />
                </View>
                <View style={styles.icon}>
                    <Feather name="settings" size={wp('5.5%')} color="white" />
                </View>
            </View>
        </View>
    )
}

export default Header;