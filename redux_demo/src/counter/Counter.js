import React from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {counterState, increment, decrement} from './counterSlice';

const Counter = () => {
  const countState = useSelector(counterState);
  const action = useDispatch();
  return (
    <View>
      <Text>{countState.value}</Text>
      <Button
        title="Tăng"
        onPress={() => {
          action(increment());
        }}
      />
      <Button
        title="Giảm"
        onPress={() => {
          action(decrement());
        }}
      />
    </View>
  );
};

export default Counter;
