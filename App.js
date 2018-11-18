/**
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConfigureStore } from './src/Redux';
import { RootContainer } from './src/Containers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => {
  const { store, persistor } = ConfigureStore();

  return (
    <View style={styles.container}>
      <Provider store={store}>
        <PersistGate
          persistor={persistor}
        >
          <RootContainer />
        </PersistGate>
      </Provider>
    </View>
  );
};

export default App;
