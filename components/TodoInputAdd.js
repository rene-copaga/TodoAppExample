import React, {Component} from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'

class TodoInputAdd extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '', 
            description: ''
        }
    }

    render() {
        const { goBack } = this.props.navigation;
        const addTodo = this.props.navigation.getParam('addTodo','');

        return (
            <View style={styles.mainContainer}>
                <View>
                    <TextInput
                        style={styles.title}
                        placeholder='Title'
                        onChangeText={(text) => {this.setState({title: text})}}
                    />
                    <TextInput
                        style={styles.description}
                        placeholder='Description'
                        numberOfLines={10}
                        onChangeText={(text) => {this.setState({description: text})}}
                    />
                </View>
                <Button
                        title="Add"
                        onPress={() => {
                            addTodo(this.state.title, this.state.description)
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

export default TodoInputAdd