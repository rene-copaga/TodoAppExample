import React, {Component} from 'react'
import {View, Button, FlatList, CheckBox, Text, TouchableOpacity, StyleSheet} from 'react-native'

class Home extends Component {

    constructor() {
        super()
        this.state = {
            todos: [{complete: false, title: 'Actividad1', description: 'Description1', index: 0},
                    {complete: false, title: 'Actividad2', description: 'Description2', index: 1}]
        }
    }

    FlatListItemSeparator = () => {
        return (
          <View
            style={styles.separator}
          />
        );
    }

    render() {
        return(
            <View>
                <FlatList
                    data={this.state.todos}
                    extraData={this.state}
                    ItemSeparatorComponent = {this.FlatListItemSeparator}
                    renderItem={
                        ({item}) =>
                        <TouchableOpacity>
                            <CheckBox
                                value={item.complete}
                            />
                            <Text>
                                {item.title}
                            </Text>
                        </TouchableOpacity >
                    }
                    keyExtractor={(item) => item.index.toString()}
                />
                <Button 
                    title="Add"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    separator: {
        height: 1,
        width: "100%",
        backgroundColor: "#ecf0f1",
    }
});

export default Home