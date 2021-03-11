import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Conditions() {
  return (
    <View style={styles.container}>

      <View style={styles.condition}>
        <Feather name='wind' size={23} color='#1ed6ff' />
        <Text>7 km/h</Text>
      </View>

      <View style={styles.condition}>
        <MaterialCommunityIcons name='weather-sunset-up' size={23} color='#1ed6ff' />
        <Text>5:22 am</Text>
      </View>

      <View style={styles.condition}>
        <MaterialCommunityIcons name='weather-sunset-down' size={23} color='#1ed6ff' />
        <Text>6:15 pm</Text>
      </View>

      <View style={styles.condition}>
        <Feather name='droplet' size={23} color='#1ed6ff' />
        <Text>64</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '95%',
    borderRadius: 8,
  },

  condition: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});