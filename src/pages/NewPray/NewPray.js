import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles.js';
import Menu from '../../components/Menu/Menu.js';
import api from '../../services/api.js';

function NewPray(props) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [creator, setCreator] = useState('');

    function goBack() {
        props.navigation.navigate('Prays');
    };

    async function postPray() {
        const data = {
            title,
            content,
            creator
        };
        try {
            const response = await api.post('prayer', data);
            alert('Oração registrada com sucesso! Obrigado por contribuir. Não se esqueça de rezar pelo projeto.');
        } catch (err) {
            alert('Não foi possível registrar a sua oração. Tente novamente.');
        }
    };

    return (
        <View style={styles.newPrayContainer}>
            <Menu nav={goBack} back />
            <View syle={styles.formContainer}>
                <TextInput
                    style={styles.inputs}
                    placeholder="Título"
                    value={title}
                    onChangeText={text => setTitle(text)} />
                <View style={styles.textAreaContainer}>
                    <TextInput
                        onChangeText={text => setContent(text)}
                        value={content}
                        style={[styles.inputs, styles.textArea]}
                        underlineColorAndroid="transparent"
                        placeholder="Oração"
                        numberOfLines={10}
                        multiline={true}
                    />
                </View>
                <TextInput
                    onChangeText={text => setCreator(text)}
                    value={creator}
                    style={styles.inputs}
                    placeholder="Seu nome" />
                <TouchableOpacity style={styles.sendButton} onPress={postPray}>
                    <Text style={styles.textButton}>ENVIAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default NewPray;