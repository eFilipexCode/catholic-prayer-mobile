import React from 'react';
import logo from '../../assets/praying.png';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles.js';

function Menu(props) {
    return (
        <View style={[styles.menu, {flexDirection: props.back ? 'row-reverse' : 'row'}]}>
            <Image source={logo} style={styles.logo} />
            {props.back
                ?
                <TouchableOpacity style={styles.prayBtn} onPress={props.nav}>
                    <Text style={styles.textBtn}>Voltar</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.prayBtn} onPress={props.nav}>
                    <Text style={styles.textBtn}>Rezar</Text>
                </TouchableOpacity>
            }
        </View>
    );
};

export default Menu;