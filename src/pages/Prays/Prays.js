import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from './styles.js';
import api from '../../services/api.js';
import Pray from '../Pray/Pray.js';
import Menu from '../../components/Menu/Menu.js';

class Prays extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prays: []
        };

        this.navigateToNewPray = this.navigateToNewPray.bind(this);
    };


    componentDidMount() {
        this.getPosts();
    };

    componentWillUnmount() {
        this.setState({});
    }

    async getPosts() {
        const response = await api.get('prayers');
        this.setState({ prays: [...this.state.prays, ...response.data] });
    };

    navigateToNewPray() {
        this.props.navigation.navigate('NewPray');
    };

    render() {
        return (
            <View style={styles.praysContainer}>
                <Menu nav={this.navigateToNewPray} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    {this.state.prays.map(p => (
                        <Pray key={p._id} title={p.title} content={p.content} creator={p.creator} />
                    ))}
                </ScrollView>
            </View>
        );
    };
};


export default Prays;