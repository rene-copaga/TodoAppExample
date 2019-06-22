import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home'
import TodoInputAdd from './TodoInputAdd'
import TodoInputEdit from './TodoInputEdit'


const HomeNavigator = createStackNavigator({
    Home: { 
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            title: 'TO-DO App',
            headerStyle: {
                backgroundColor: '#424242',
            },
            headerTintColor: '#fff',
        })
    },
    TodoInputAdd: {
        screen: TodoInputAdd,
        navigationOptions: ({ navigation }) => ({
            title: 'New TO-DO',
            headerStyle: {
                backgroundColor: '#424242',
            },
            headerTintColor: '#fff',
        })
    },
    TodoInputEdit: {
        screen: TodoInputEdit,
        navigationOptions: ({ navigation }) => ({
            title: 'Edit TO-DO',
            headerStyle: {
                backgroundColor: '#424242',
            },
            headerTintColor: '#fff',
        })
    }
},
    {
        initialRouteName: 'Home'
    }
);

const AppContainer = createAppContainer(HomeNavigator);

class Main extends Component {
    render() {
        return <AppContainer />;
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    drawerHeader: {
      backgroundColor: '#424242',
      height: 140,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'column'
    },
    drawerHeaderText: {
      color: 'white',
      fontSize: 24,
      margin: 15,
    },
    drawerImage: {
      margin: 15,
      width: 80,
      height: 60
    }
  });

export default Main