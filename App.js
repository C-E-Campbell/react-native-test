import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState([]);
  const inputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    if (enteredGoal) {
      setGoals((currentGoals) => [
        ...currentGoals,
        { key: Math.random().toString(), value: enteredGoal },
      ]);
      setEnteredGoal('');
    }
  };

  const deleteHandler = (key) => {
    const newGoals = goals.filter((el) => el.key !== key);
    setGoals(newGoals);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={inputHandler}
          placeholder='Course Goal'
          style={styles.textInput}
          value={enteredGoal}
        />
        <Button style={styles.button} onPress={addGoalHandler} title='ADD' />
      </View>
      <FlatList
        data={goals}
        renderItem={(itemData) => (
          <View onPress={deleteHandler} style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
            <Button
              title='Delete'
              onPress={() => deleteHandler(itemData.item.key)}
            />
          </View>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  textInput: {
    borderBottomColor: 'black',
    borderWidth: 2,
    marginBottom: 2,
    padding: 10,
    width: '70%',
    borderRadius: 4,
  },
  listItem: {
    padding: 10,
    backgroundColor: '#f7f7f7',
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 15,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  button: {
    width: '25%',
  },
});
