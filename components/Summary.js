import React, {Component} from 'react'
import {View, Text, StyleSheet, AsyncStorage} from 'react-native'

const key = 'todos'

class Summary extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeTasks: 0,
            completedTasks: 0
        }
    }

    async componentDidMount() {
        this.willFocusSubscription = this.props.navigation.addListener(
            'willFocus',
            () => {
                    AsyncStorage.getItem(key).then(
                        (data) => {
                            let todos = JSON.parse(data)
                            if(todos) {
                                this.setState({ activeTasks: todos.length })
                                let completedTasks = 0
                                for(i=0;i<todos.length;i++) {
                                    if (todos[i].complete) {
                                        completedTasks++
                                    }
                                }
                                this.setState({ completedTasks: completedTasks })
                            }
                        })
            }
        );
    }

    componentWillUnmount() {
        this.willFocusSubscription.remove();
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.textView}>
                    Active Tasks: {this.state.activeTasks}
                </Text>
                <Text style={styles.textView}>
                    Completed Tasks: {this.state.completedTasks}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
 
    mainContainer :{
        justifyContent: 'flex-start',
        flex:1,
        margin: 20
    },
     
    textView: {
        padding: 20,
        fontSize: 18
    }
});

export default Summary