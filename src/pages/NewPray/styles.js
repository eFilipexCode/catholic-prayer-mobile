import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    newPrayContainer: {
        flex: 1,
        backgroundColor: '#eee',
    },
    formContainer: {
        justifyContent: 'space-around',
    },
    inputs: {
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 20
    },
    textArea: {
        justifyContent: 'flex-start',
        textAlignVertical: 'top',
        minHeight: 450,
        backgroundColor: '#fff'
    },
    sendButton: {
        backgroundColor: '#e74c3c',
        alignSelf: 'center',
        padding: 20,
        width: '90%',
        marginHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center'
    },
    textButton: {
        color: '#fff',
        fontWeight: '900'
    }
});

export default styles;