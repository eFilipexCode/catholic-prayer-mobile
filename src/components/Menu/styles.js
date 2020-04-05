import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


const styles = StyleSheet.create({
    menu: {
        width: '100%',
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight + 10,
        borderBottomColor: '#e74c3c',
        borderBottomWidth: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    prayBtn: {
        backgroundColor: '#e74c3c',
        padding: 10,
        margin: 10,
        borderRadius: 10
    },
    textBtn: {
        color: '#eee'
    },
    logo: {
        width: 50,
        height: 50,
        marginHorizontal: 10
    }
});

export default styles;