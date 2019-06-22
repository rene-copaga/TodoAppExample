import React, {Component} from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'

class TodoInputEdit extends Component {

    static navigationOptions = ({ navigation })  => {
        const todo = navigation.getParam('todo','');
        const deleteTodo = navigation.getParam('deleteTodo','');
        return {
            headerRight: (
                <Button
                  onPress={() => {
                      deleteTodo(todo.index)
                      navigation.goBack()
                  }}
                  title="DELETE TASK"
                  color="#424242"
                />
            )
        }
    };

    constructor(props) {
        super(props)
        const todo = this.props.navigation.getParam('todo','');
        this.state = {
            title: todo.title, 
            description: todo.description,
            index: todo.index
        }
    }

    render() {
        const { goBack } = this.props.navigation;
        const editTodo = this.props.navigation.getParam('editTodo','');

        return (
            <View style={styles.mainContainer}>
                <View>
                    <TextInput
                        style={styles.title}
                        value={this.state.title}
                        placeholder='Title'
                        onChangeText={(text) => {this.setState({title: text})}}
                    />
                    <TextInput
                        style={styles.title}
                        value={this.state.description}
                        placeholder='Description'
                        numberOfLines={10}
                        onChangeText={(text) => {this.setState({description: text})}}
                    />
                </View>
                <Button 
                    title="Edit"
                    onPress={() => {
                        editTodo(this.state.index, this.state.title, this.state.description)
                        goBack()
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer :{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 10
    },

    title: {
        alignContent: 'flex-start',
        padding: 20,
        fontSize: 18,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ecf0f1'
    },

    description: {
        alignContent: 'flex-start',
        padding: 20,
        fontSize: 18,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ecf0f1'
    }
});

export default TodoInputEdit