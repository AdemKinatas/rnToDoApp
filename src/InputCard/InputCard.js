import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert,Keyboard } from 'react-native';
import styles from './InputCard.styles';

const Separator = () => (
    <View style={styles.separator} />
);

const InputCard = ({ todos, setTodos, active, setActive }) => {
    const [text, setText] = useState("");

    const onChangeText = (text) => {
        setText(text);
    };

    const onPressIn = () => {
        setActive(true);
    };

    const onPress = (e) => {
        Keyboard.dismiss();
        setActive(false);
        e.preventDefault();
        if (text === "") {
            Alert.alert("Lütfen bir şeyler yazın!");
            return false;
        }
        setTodos([...todos,
        {
            title: text,
            isActive: true,
        }
        ]);
        setText("");
    }


    return (
        <View>
            <View style={styles.inputBlock}>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputText}
                        onChangeText={onChangeText}
                        placeholder="Yapılacak..."
                        value={text}
                        onPressIn={onPressIn}
                    />
                </View>

                <Separator />

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button, active && {backgroundColor: '#ffa500'}]}
                        onPress={onPress}
                    >
                        <Text style={styles.buttonText}>Kaydet</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default InputCard;