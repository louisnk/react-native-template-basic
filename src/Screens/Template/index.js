import React from 'react';
import { Platform, Text, View } from 'react-native';
import styles from './TemplateStyle';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n Cmd+D or shake for dev menu',
  android:
      'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu',
});

const TemplateScreen = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>Welcome to React Native!</Text>
    <Text style={styles.instructions}>To get started, edit App.js</Text>
    <Text style={styles.instructions}>{instructions}</Text>
  </View>
);

export default TemplateScreen;
