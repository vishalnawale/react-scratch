import React, { Component } from 'react';
import { View, Text,ScrollView } from 'react-native';
import {Card} from 'react-native-elements';
import { connect } from 'react-redux';
import {baseUrl} from './shared/baseUrl';
import {Loading} from './LoadingComponent';

const mapstateToProps = state =>{
    return{
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

function RenderItem(props) {
    
    const item = props.item;
    
    if(props.isLoading){
        return(
            <Loading/>
        )
    }else if(props.errMsg){
        return(
            <View>
                 <Text>{props.errMsg}</Text>
            </View>
           
        )
    }else{
        if (item != null) {
            return(
                <Card
                    featuredTitle={item.name}
                    featuredSubtitle={item.designation}
                    image={{uri: baseUrl + item.image}}>
                    <Text
                        style={{margin: 10}}>
                        {item.description}</Text>
                </Card>
            );
        }
        else {
            return(<View></View>);
        }
    }



}

class Home extends Component {

    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#512DA8',
          },
          headerTitleStyle: {
            color: "#fff"            
        }
    };



    render() {

        const { navigate } = this.props.navigation;
        return(
            <ScrollView>
               <RenderItem item={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
               isLoading ={this.props.dishes.isLoading}
               errMsg={this.props.dishes.errMsg} />
                <RenderItem item={this.props.promotions.promotions.filter((promo) => promo.featured)[0]} 
                isLoading ={this.props.promotions.isLoading}
                errMsg={this.props.promotions.errMsg}/>
                <RenderItem item={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                isLoading={this.props.leaders.isLoading}
                errMsg={this.props.leaders.errMsg} />
            </ScrollView>
           
        );
    }
}

export default connect(mapstateToProps) (Home);