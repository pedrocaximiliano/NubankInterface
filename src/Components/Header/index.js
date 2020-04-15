import React from 'react';

import {View, StyleSheet, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Logo from '../../assets/Nubank_Logo.png';
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 30,
  },
  title: {
    marginTop: 10,
    alignItems: 'center',
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  top: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
});

export default function Header() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.top}>
          <Image source={Logo} />
          <Text style={styles.title}>Pedro</Text>
        </View>
        <Icon name="keyboard-arrow-down" size={20} color={'#fff'} />
      </View>
    </>
  );
}
