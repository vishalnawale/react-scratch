import React, { Component } from 'react';
import { Text, View ,ScrollView,FlatList} from 'react-native';
import { Card,Icon } from 'react-native-elements';
import { DISHES } from './shared/dishes';
import { COMMENTS } from './shared/comments';

function RenderDish(props) {

    const dish = props.dish;
    
        if (dish != null) {
            return(
                <Card
                featuredTitle={dish.name}
                image={require('./images/uthappizza.png')}>
                    <Text style={{margin: 10}}>
                        {dish.description}
                    </Text>
                    <Icon 
                    raised
                    reverse
                    name={props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    onPress={()=>props.faourites ? console.log("Already favourite") : props.onPress()
                    }/>
                </Card>
            );
        }
        else {
            return(<View></View>);
        }
}

function RenderComments(props){
    const comments=props.comments;
    const rendercommentItem=({item,index})=>{

        return(
            <View key={index} style={{margin:10}}>
                <Text style={{fontSize:14}}>{item.comment}</Text>
                <Text style={{fontSize:12}}>{item.rating}</Text>
                <Text style={{fontSize:12}}>{'--'+item.author+', '+item.date}</Text>
            </View>
        );
    }

    return(

        <Card title="Comments">
            <FlatList data={comments}
            renderItem={rendercommentItem}
            keyExtractor={item =>item.id.toString()}/>
        </Card>
    );
}

class  Dishdetail extends Component {

    constructor(props){
        super(props);
        this.state={
            dishes:DISHES,
            comments:COMMENTS,
            faourites:[]
        };
    };
    markFaourites(dishId){
        this.setState({faourites:this.state.faourites.concat(dishId)})

    }

    static navigationOptions = {
        title: 'Dish Details',
        headerStyle: {
            backgroundColor: '#512DA8',
          },
          headerTitleStyle: {
            color: "#fff"            
        }
    };

    render() {
        const dishId = this.props.navigation.getParam('dishId','');
        return(
            <ScrollView >
            <RenderDish dish={this.state.dishes[+dishId]}
            favorite={this.state.faourites.some(el => el ===dishId)} 
            onPress={()=>this.markFaourites(dishId)}
            />
            <RenderComments comments={this.state.comments.filter((comment) => comment.dishId === dishId)} />

            </ScrollView>
        );
    }
}

export default Dishdetail;