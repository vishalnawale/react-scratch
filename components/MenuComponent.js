import React, { Component } from 'react';
import {View ,FlatList} from 'react-native';
import {Tile} from 'react-native-elements';
import { connect } from 'react-redux';
import {baseUrl} from './shared/baseUrl';


const mapstateToProps = state =>{
    return{
        dishes:state.dishes
    }
}


class  Menu extends Component {


    static navigationOptions = {
        title: 'Menu',
        headerStyle: {
            backgroundColor: '#512DA8',
          },
          headerTitleStyle: {
            color: "#fff"            
        }
    };


   

    render(){
        const renderMenuItem = ({item, index}) => {

           

            return (
                    <Tile
                        key={index}
                        title={item.name}
                        caption={item.description}
                        featured
                        onPress={() => navigate('Dishdetail', { dishId: item.id })}
                        imageSrc={{ uri: baseUrl + item.image}}
                      />
            );
        };

        const { navigate } = this.props.navigation;
        return (
            
            <FlatList 
                data={this.props.dishes.dishes}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
                />
    );
    }
    
}


export default connect(mapstateToProps) (Menu);