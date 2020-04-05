import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    prayContainer: {
        padding: 20,
        marginHorizontal: 20,
        backgroundColor: '#fff',
        minHeight: 350,
        marginVertical: 10,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: 'transparent',
        justifyContent: 'space-around',
    },
    prayTitle: {
        fontSize: 25,
        color: '#e74c3c',
        fontWeight: '900',
        textAlign: 'center',
        margin: 10
    },
    prayContent: {
        fontSize: 17,
        marginVertical: 10,
    },
    prayCreator: {
        borderTopWidth: 3,
        borderTopColor: '#e74c3c',
        padding: 20,
        fontSize: 15,
        textAlign: 'center'
    },
    creator: {
        fontWeight: '900',
        color: '#e74c3c'
    }
});

export default styles;