/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';
import {USER_ROLE} from './utils/Constant';

import ScreenWrapper from './common/components/ScreenWrapper';
import UserScreen from './features/User/UserScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>{USER_ROLE.ADMIN}</Text>
        <UserScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
