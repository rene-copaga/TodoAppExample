import React, {Component} from 'react'
import {StyleSheet, ScrollView, View, Image, Text, TouchableOpacity} from 'react-native'
import { createStackNavigator, createDrawerNavigator, DrawerItems, SafeAreaView, createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Home from './Home'
import TodoInputAdd from './TodoInputAdd'
import TodoInputEdit from './TodoInputEdit'
import Summary from './Summary'

class NavigationDrawerStructure extends Component {
    toggleDrawer = () => {
      this.props.navigationProps.toggleDrawer();
    };
    render() {
      return (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
            <Icon name="menu" size={24} margin={15}
                iconStyle={{ color: 'white' }} />
          </TouchableOpacity>
        </View>
      );
    }
}

const HomeNavigator = createStackNavigator({
    Home: { 
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            title: 'TO-DO App',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
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

const SummaryNavigator = createStackNavigator({
    Summary: { 
        screen: Summary,
        navigationOptions: ({ navigation }) => ({
            title: 'Statistics',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
              backgroundColor: '#424242',
            },
            headerTintColor: '#fff',
        }),
    }
});

const CustomDrawerContentComponent = (props) => (
    <ScrollView>
      <SafeAreaView style={styles.container}
        forceInset={{ top: 'always', horizontal: 'never'}}>
        <View style={styles.drawerHeader}>
          <View style={{flex: 1}}>
            <Image source={require('./images/logo.png')}
                style={styles.drawerImage} />
          </View>
          <View>
            <Text style={styles.drawerHeaderText}>Todo App</Text>
          </View>
        </View>
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
);

const MainNavigator = createDrawerNavigator({
    Home: 
      { screen: HomeNavigator,
        navigationOptions: {
          title: 'Home',
          drawerLabel: 'TO-DO List',
          drawerIcon: ({ tintColor }) => (
              <Icon
                name='list'
                type='font-awesome'
                size={20}
                color={tintColor}
              />
          )
        }, 
      },
    Summary: 
      { screen: SummaryNavigator,
        navigationOptions: {
          title: 'Summary',
          drawerLabel: 'Statistics',
          drawerIcon: ({ tintColor }) => (
              <Icon
                name='bar-chart'
                type='font-awesome'
                size={20}
                color={tintColor}
              />
          )
        }
      }
},{
    initialRouteName: 'Home',
    drawerBackgroundColor: '#FFF',
    contentComponent: CustomDrawerContentComponent
});

const AppContainer = createAppContainer(MainNavigator);

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