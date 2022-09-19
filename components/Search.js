
import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Context from '../contexts/Context';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    async goSearch() {
        await this.context.searchByTerm(this.state.term);
        this.props.navigation.navigate('Results');
    }

    static contextType = Context;
    
    render() {
        return (
            <View style={styles.view}>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => { this.setState({ term: value }) }}
                    placeholder="What to Search?"
                />
                <Text
                    style={styles.add}
                    onPress={() => this.goSearch()}
                >
                    Go
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    view: {
        flex: 1,
        width: '100%',
        bottom: '50%',
        position: 'absolute',
        flexDirection: 'row'
    },
    title: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 30,
    },
    input: {
        width: '75%',
        borderRadius: 30,
        borderWidth: 1,
        padding: 5,
        marginLeft: 10,
        fontSize: 18
    },
    add: {
        fontSize: 20,
        padding: 5,
        position: 'absolute',
        right: '10%'
    }
});