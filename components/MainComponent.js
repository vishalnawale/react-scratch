import React, { Component } from "react";
import Menu from './MenuComponent';
import Home from './homecomponent';
import Contact from './ContactUsComponent';
import Dishdetail from './DishdetailComponent';
import AboutUs from './AboutUsComponent';
import { View, Platform ,Image,StyleSheet,ScrollView,Text} from "react-native";
import {createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator,DrawerItems} from 'react-navigation-drawer';
import { createAppContainer,SafeAreaView } from "react-navigation";
import {Icon} from 'react-native-elements';
import {fetchComments, fetchDishes ,fetchPromos, fetchLeaders} from '../redux/ActionCreators'
import { connect } from 'react-redux';



const mapstateToProps = state =>{
    return{
       
    }
}

const mapDispatchToProps= dispatch => ({
  fetchDishes : () =>dispatch(fetchDishes()),
  fetchPromos : () =>dispatch(fetchPromos()),
  fetchComments : () =>dispatch(fetchComments()),
  fetchLeaders : () =>dispatch(fetchLeaders()),
});


const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu ,navigationOptions:({navigation})=>({
      headerLeft:<Icon name='menu' size={24} color='white'
      onPress={()=>navigation.toggleDrawer()}/>
    })},
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
      headerTintColor: "#fff",
      headerLeft:<Icon name='menu' size={24} color='white'
      onPress={()=>navigation.toggleDrawer()}/>
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
        headerTintColor: "#fff" ,
        headerLeft:<Icon name='menu' size={24} color='white'
        onPress={()=>navigation.toggleDrawer()}/> 
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
        headerTintColor: "#fff",
        headerLeft:<Icon name='menu' size={24} color='white'
        onPress={()=>navigation.toggleDrawer()}/>  
      })
});

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <View style={styles.drawerHeader}>
        <View style={{flex:1}}>
        <Image source={require('./images/logo.png')} style={styles.drawerImage} />
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
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
          drawerLabel: 'Home',
          drawerIcon : ({tintColor})=>(
            <Icon name='home'
            type='font-awesome'
            size={25}
            color={tintColor}/>
          )
        
        }
      },
      AboutUs: 
      { screen: AboutUSNavigator,
        navigationOptions: {
          title: 'AboutUs',
          drawerLabel: 'AboutUs',
          drawerIcon : ({tintColor})=>(
            <Icon name='info-circle'
            type='font-awesome'
            size={25}
            color={tintColor}/>
          )
        }, 
      },
    Menu: 
      { screen: MenuNavigator,
        navigationOptions: {
          title: 'Menu',
          drawerLabel: 'Menu', drawerIcon : ({tintColor})=>(
            <Icon name='list'
            type='font-awesome'
            size={25}
            color={tintColor}/>
          )
        }, 
      },
      Contact: 
      { screen: ContactUsNavigator,
        navigationOptions: {
          title: 'Contact',
          drawerLabel: 'Contact',
          drawerIcon : ({tintColor})=>(
            <Icon name='address-card'
            type='font-awesome'
            size={22}
            color={tintColor}/>
          )
        }, 
      }
}, {
  drawerBackgroundColor: '#D1C4E9',
  contentComponent:CustomDrawerContentComponent
});
const AppContainer=createAppContainer(MainNavigator);
 class Main extends React.Component{

  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }

    render(){
        return(
            <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }} >
            <AppContainer/>
        </View>
        );
    }
} 

const styles=StyleSheet.create({
  container:{
    flex:1
  },
  drawerHeader:{
    backgroundColor:'#512DA8',
    height:140,
    alignItems:'center',
    justifyContent:'center',
    flex:1,
    flexDirection:'row'

  },
  drawerHeaderText:{
    color:'white',
    fontSize:24,
    fontWeight:'bold'

  },
  drawerImage:{
    margin:10,
    width:80,
    height:60
  }



})
export default connect(mapstateToProps,mapDispatchToProps) (Main);