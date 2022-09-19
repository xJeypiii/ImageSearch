
import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import Context from '../contexts/Context';

export default class Details extends React.Component {

    async goSearch(term) {
        await this.context.searchByTerm(term);
        this.props.navigation.navigate('Results');
    }

    static contextType = Context;

    render() {

        const item = this.props.route.params.item;
        const tags = item.tags.split(',');

        return (
            <View style={{ flex: 1, alignItems: 'center'}}>
                <Image
                    style={{ width: 200, height: 200 }}
                    source={{ uri: item.previewURL }}
                    resizeMode={'cover'}
                />
                <Text>{item.user}</Text>
                <FlatList
                    data={tags}
                    horizontal={true}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={{ alignSelf: 'flex-start' }}>
                            <TouchableOpacity onPress={() => this.goSearch(item)}>
                                <Text>{item}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        );
    }
}