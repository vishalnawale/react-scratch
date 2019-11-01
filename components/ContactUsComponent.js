import React, {Component} from 'react';
import {Text,View} from 'react-native';

class ContactUs extends React.Component{

    static navigationOptions = {

        title: 'Contact',
    
        headerStyle: {
            backgroundColor: '#512DA8',
          },
          headerTitleStyle: {
            color: "#fff"            
        }
    };

    render(){
        return(

            <View  style={{borderBottomWidth:1}}>
                <Text style={{textAlign:"center",fontSize:20,fontWeight:"bold",padding:10}}>
                    Contact Information
                </Text>
                <Text style={{padding:5,fontWeight:"bold"}}> 121, Clear Water Bay Road{"\n"}</Text>
                <Text style={{padding:5,fontWeight:"bold"}}>Clear Water Bay, Kowloon{"\n"}</Text>
                <Text style={{padding:5,fontWeight:"bold"}}>HONG KONG~{"\n"}</Text>
                <Text style={{padding:5,fontWeight:"bold"}}>Tel: +852 1234 5678{"\n"}</Text>
                <Text style={{padding:5,fontWeight:"bold"}}>Fax: +852 8765 4321{"\n"}</Text>
                <Text style={{padding:5,fontWeight:"bold"}}>Email:confusion@food.net{"\n"}</Text>
              
                </View>
        );

        
    }
}

<style>
    .text{

    }
</style>

export default ContactUs;