import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ScreenWrapper = ({children}) => {
  return (
    <View>
      <Text>Home</Text>
      {children}
    </View>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({});
