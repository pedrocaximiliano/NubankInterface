import React from 'react';

import {View, StyleSheet, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';

const styles = StyleSheet.create({
  container: {
    height: 100,
    marginTop: 20,
  },
  tabText: {
    color: '#fff',
    fontSize: 13,
  },
  tabItem: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 3,
    marginLeft: 10,
    padding: 10,
    justifyContent: 'space-between',
  },
});

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {paddingLeft: 20, paddingRight: 20},
  showsHorizontalScrollIndicator: false,
})``;

export default function Tabs() {
  return (
    <>
      <View style={styles.container}>
        <TabsContainer>
          <View style={styles.tabItem}>
            <Icon name="person-add" size={24} color={'#fff'} />
            <Text style={styles.tabText}>Indicar Amigos</Text>
          </View>
          <View style={styles.tabItem}>
            <Icon name="chat-bubble-outline" size={24} color={'#fff'} />
            <Text style={styles.tabText}>Cobrar</Text>
          </View>
          <View style={styles.tabItem}>
            <Icon name="arrow-downward" size={24} color={'#fff'} />
            <Text style={styles.tabText}>Depositar</Text>
          </View>
          <View style={styles.tabItem}>
            <Icon name="arrow-upward" size={24} color={'#fff'} />
            <Text style={styles.tabText}>Transferir</Text>
          </View>
          <View style={styles.tabItem}>
            <Icon name="lock" size={24} color={'#fff'} />
            <Text style={styles.tabText}>Bloquear cartão</Text>
          </View>
        </TabsContainer>
      </View>
    </>
  );
}
