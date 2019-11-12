import React, { Component } from 'react';
import { View,ScrollView ,FlatList,Text} from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import {baseUrl} from './shared/baseUrl';
import {Loading} from './LoadingComponent';


 const mapStatetoProps = state =>{

    return{
        leaders:state.leaders
    }
}
  


class AboutUs extends Component{

    static navigationOptions = {
        title: 'AboutUs',
        headerStyle: {
            backgroundColor: '#512DA8',
          },
          headerTitleStyle: {
            color: "#fff"            
        }
    };


    render(){

        const RenderMenuItem= ({item,index})=>{
            return(

             
                <View>
                     
                    <ListItem
                     key={index}
                     title={item.name}
                      subtitle={item.description}
                      leftAvatar={{source: {uri: baseUrl + item.image}}}
                       hideChevron={true}
                       />
              </View>
            )
        }

        if(this.props.leaders.isLoading){
            return(
                <ScrollView style={{margin:10}}>
                <Text style={{textAlign:"center",fontSize:20,fontWeight:"bold"}}>
                     Corporate Leaderships
               </Text>
                      <FlatList>
                        <Loading/>
                      </FlatList>
                 </ScrollView>
            )
        }else if(this.props.leaders.errMsg){
            return(
               
                    <ScrollView style={{margin:10}}>
                    <Text style={{textAlign:"center",fontSize:20,fontWeight:"bold"}}>
                         Corporate Leaderships
                   </Text>
                          <FlatList>
                             <Text>{this.props.leaders.errMsg}</Text>
                          </FlatList>
                     </ScrollView>
                

            )
        }else{

            return(
                <ScrollView style={{margin:10}}>
                    <Text style={{textAlign:"center",fontSize:20,fontWeight:"bold"}}>
                               Our History
                        </Text>
                        <Text>
                            Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong. 
                            Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.
                            The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.
                        </Text> 
                        <Text style={{textAlign:"center",fontSize:20,fontWeight:"bold"}}>
                              Corporate Leaderships
                        </Text>
                    <FlatList
                data={this.props.leaders.leaders}
                renderItem={RenderMenuItem }
                keyExtractor={item=>item.id.toString()}>
    
                </FlatList>
                </ScrollView>
             
            );
        }

     
    
        
    }

}

export default connect(mapStatetoProps) (AboutUs);