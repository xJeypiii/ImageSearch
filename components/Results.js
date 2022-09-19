
import React from 'react';
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import Context from '../contexts/Context';

export default class Results extends React.Component {

    goDetails(item) {
        this.props.navigation.navigate('Details', {item: item});
    }

    async handleMore() {
        await this.context.handleMore();
    }

    static contextType = Context;

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <FlatList
                    data={this.context.results}
                    numColumns={3}
                    onEndReached={info => this.handleMore()}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <View style={{ padding: 5, alignSelf: 'flex-start' }}>
                            <TouchableOpacity onPress={() => this.goDetails(item)}>
                                <Image
                                    style={{ width: 120, height: 120 }}
                                    source={{ uri: item.previewURL }}
                                    resizeMode={'cover'}
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        );
    }
}