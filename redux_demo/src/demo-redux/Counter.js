import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  counterState,
  increment,
  decrement,
  getDataFromApi,
} from './CounterSlice';

const Counter = () => {
  //   const [value, setValue] = useState(0);
  const data = useSelector(counterState);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>Component1</Text>
      <Text style={styles.title}>{data.value}</Text>
      <Button
        title="Tăng"
        onPress={() => {
          // dispatch(increment());
          dispatch(getDataFromApi());
        }}
      />
      <Button
        title="Giảm"
        onPress={() => {
          dispatch(decrement());
        }}
      />
      <Text>{JSON.stringify(data.name)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
  },
});

export default Counter;
