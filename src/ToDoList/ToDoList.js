import React, { useState } from 'react'
import { View, TextInput, FlatList, Text, TouchableOpacity } from 'react-native'
import styles from './ToDoList.styles'


const ToDoList = ({ todos, setTodos, setActive }) => {
    const [count, setCount] = useState(0);

    const changeIsActive = (item) => {
        setActive(false);
        if  (item.isActive) {
            item.isActive = false;
            setCount(count + 1);
        } else {
            item.isActive = true;
            setCount(count + 1);
        }
    };

    const deleteTodo = (item) => {
        const newTodos = todos.filter(todo => todo.title !== item.title);
        setTodos(newTodos);
    }

    const renderItem = ({ item }) =>
        <TouchableOpacity
            style={item.isActive ? styles.buttonActive : styles.buttonComplated}
            onPress={() => changeIsActive(item)}
            onLongPress={() => deleteTodo(item) }
        >
            <Text style={item.isActive ? styles.buttonTextActive : styles.buttonTextComplated}>{item.title}</Text>
        </TouchableOpacity>


    const countActive = () => {
        return todos.filter(item => item.isActive).length;
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Yapılacaklar</Text>
                <Text style={styles.title}>{countActive()}</Text>
            </View>
            <FlatList
                data={todos}
                renderItem={renderItem}
            />
        </View>
    )
}

export default ToDoList;