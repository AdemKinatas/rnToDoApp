import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainContainer: {
        margin: 5,
        padding: 5,
    },
    title: {
        fontSize: 45,
        color: '#ffa500',
    },
    text: {
        borderRadius: 10,
        backgroundColor: '#7da453',
        color: 'white',
        fontSize: 18,
        margin: 10,
        padding: 10,
    },
    buttonActive: {
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#7da453',
        padding: 10,
        marginTop: 5,
    },
    buttonComplated: {
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#37474f',
        padding: 10,
        marginTop: 5,
    },
    buttonTextActive: {
        color: 'white',
        fontSize: 18,
    },
    buttonTextComplated: {
        fontSize: 18,
        color: '#808080',
        textDecorationLine: 'line-through',
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});