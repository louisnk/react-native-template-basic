/* eslint-disable class-methods-use-this */

import React from 'react';
import { StatusBar, View } from 'react-native';
import { AppNavigator } from '..';
import styles from './RootStyle';

class RootContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <AppNavigator />
      </View>
    );
  }
}

export default RootContainer;
