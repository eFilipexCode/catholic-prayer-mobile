import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';

function Pray(props) {
    return (
        <View style={styles.prayContainer}>
            <Text style={styles.prayTitle}>{props.title}</Text>
            <Text style={styles.prayContent}>{props.content}</Text>
            <Text style={styles.prayCreator}>Oração inserida por: 
                <Text style={styles.creator}> {props.creator}</Text>
            </Text>
        </View>
    );
};

export default Pray;