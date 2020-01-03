import React from 'react'
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import {f, auth, database, storage } from '../../config/config.js'

class profile extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            loggedin: false
        }
    }

    componentDidMount = () =>{
        var that = this;
        f.auth().onAuthStateChanged(function(user){
            if(user){
                //logged in
                that.setState({
                    loggedin:true
                });
            }else{
                //no logged in
                that.setState({
                    loggedin:false
                });
            }
        });
    }
    render(){
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Profile</Text>
            </View>
        )
    }



}

export default profile;