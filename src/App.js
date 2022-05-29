import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import InputCard from './InputCard'
import ToDoList from './ToDoList'
import styles from './App.styles'


const App = () => {
  const [todos, setTodos] = useState([]);
  const [active, setActive] = useState(false);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ToDoList todos={todos} setActive={setActive} setTodos={setTodos} />
      <InputCard todos={todos} setTodos={setTodos} active={active} setActive={setActive} />
    </SafeAreaView>
  )
}
export default App;
