import React, {Component} from 'react'
import {View, Button, FlatList, CheckBox, Text, TouchableOpacity, StyleSheet} from 'react-native'

class Home extends Component {

    constructor() {
        super()
        this.state = {
            todos: [{complete: false, title: 'Actividad1', description: 'Description1', index: 0},
            {complete: false, title: 'Actividad2', description: 'Description2', index: 1}]
        }
        this.onChecked = this.onChecked.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.editTodo = this.editTodo.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
    }

    onChecked (todoIndex) {
        let todos = this.state.todos
        todos.forEach((todo) => {
          if (todo.index === todoIndex) {
            todo.complete = !todo.complete
          }
        })
        this.setState({todos})
    }

    addTodo (title, description) {
        let todos = this.state.todos
        todos.push({title: title, description: description, complete: false, index: new Date().getMilliseconds()})
        this.setState({todos})
    }

    editTodo (index, title, description) {
        let todos = this.state.todos
        todos.forEach((todo) => {
            if (todo.index === index) {
              todo.title = title
              todo.description = description
            }
        })
        this.setState({todos})
    }

    deleteTodo (index) {
        let todos = this.state.todos
        todos = todos.filter((todo) => {
            return todo.index !== index
        })
        this.setState({todos})
    }

    FlatListItemSeparator = () => {
        return (
          <View
            style={styles.separator}
          />
        );
    }

    render() {
        const { navigate } = this.props.navigation;
        return(
            <View 
                style={styles.mainContainer}>
                <FlatList
                    data={this.state.todos}
                    extraData={this.state}
                    ItemSeparatorComponent = {this.FlatListItemSeparator}
                    renderItem={
                        ({item}) =>
                        <TouchableOpacity
                            style={styles.item}
                            onPress={() => navigate('TodoInputEdit', {todo: item, editTodo: this.editTodo, deleteTodo: this.deleteTodo })}
                        >
                            <CheckBox
                                style={styles.subItem}
                                value={item.complete}
                                onChange={() => this.onChecked(item.index) }
                            />
                            <Text style={styles.subItem}>
                                {item.title}
                            </Text>
                        </TouchableOpacity >
                    }
                    keyExtractor={(item) => item.index.toString()}
                />
                <Button 
                    title="Add"
                    onPress={() => navigate('TodoInputAdd', { addTodo: this.addTodo })}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
 
    mainContainer :{
        justifyContent: 'center',
        flex:1,
        margin: 10
    },

    item: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ecf0f1'
    },
     
    subItem: {
        alignContent: 'center',
        padding: 10,
        fontSize: 18,
        height: 44,
    },

    separator: {
        height: 1,
        width: "100%",
        backgroundColor: "#ecf0f1",
    }
});

export default Home