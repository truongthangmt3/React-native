import React from 'react';
import {connect} from 'react-redux';
import {View, Text, Button, StyleSheet} from 'react-native';
import {increment, decrement} from './CounterSlice';
export const Counter2 = (props) => {
  return (
    <View style={styles.container}>
      <Text>Component2</Text>
      <Text style={styles.title}>{props.data.value}</Text>
      <Button
        title="Tăng"
        onPress={() => {
          props.increment();
        }}
      />
      <Button
        title="Giảm"
        onPress={() => {
          props.decrement();
        }}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  data: state.counter,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dddddd',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter2);
