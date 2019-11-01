import React, { Component } from "react";
import Menu from './MenuComponent';
import Home from './homecomponent';
import Contact from './ContactUsComponent';
import Dishdetail from './DishdetailComponent';
import AboutUs from './AboutUsComponent';
import { View, Platform } from "react-native";
import {createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { createAppContainer } from "react-navigation";


const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu },
    Dishdetail: { screen: Dishdetail },
},
{
    initialRouteName: 'Menu',
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        }
    }
}
);

const HomeNavigator = createStackNavigator({
    Home: { screen: Home }
  }, {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff"  
    })
});

const ContactUsNavigator = createStackNavigator({
    Contact: { screen : Contact }
},{
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTitleStyle: {
            color: "#fff"            
        },
        headerTintColor: "#fff"  
      })
});

const AboutUSNavigator = createStackNavigator({
    AboutUs: { screen : AboutUs }
},{
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTitleStyle: {
            color: "#fff"            
        },
        headerTintColor: "#fff"  
      })
});

const MainNavigator = createDrawerNavigator({
    Home: 
      { screen: HomeNavigator,
        navigationOptions: {
          title: 'Home',
          drawerLabel: 'Home'
        }
      },
      AboutUs: 
      { screen: AboutUSNavigator,
        navigationOptions: {
          title: 'AboutUs',
          drawerLabel: 'AboutUs'
        }, 
      },
    Menu: 
      { screen: MenuNavigator,
        navigationOptions: {
          title: 'Menu',
          drawerLabel: 'Menu'
        }, 
      },
      Contact: 
      { screen: ContactUsNavigator,
        navigationOptions: {
          title: 'Contact',
          drawerLabel: 'Contact'
        }, 
      }
}, {
  drawerBackgroundColor: '#D1C4E9'
});
const AppContainer=createAppContainer(MainNavigator);
 class Main extends React.Component{
    

    render(){
        return(
            <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }} >
            <AppContainer/>
        </View>
        );
    }
} 
export default Main;