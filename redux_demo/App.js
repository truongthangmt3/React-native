/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';
import Counter from './src/demo-redux/Counter';
import Counter2 from './src/demo-redux/Counter2';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Counter />
        {/* <Counter2 /> */}
      </SafeAreaView>
    </Provider>
  );
};

export default App;
