import React from "react";

import {View, Text, StyleSheet,Button,Alert,TouchableOpacity } from "react-native"

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            randomColor:null
        }
    }

    getRandomColor = () =>{
        return(
            "rgb("+
            Math.floor(Math.random() * 256) + "," +
            Math.floor(Math.random() * 256) + "," +
            Math.floor(Math.random() * 256) + ")"
        )
    }

    myButtonPress = () => {
        this.setState({randomColor : this.getRandomColor() });
    }

    render() {
        return (
            <View style={[styles.container,{backgroundColor : this.state.randomColor}]}>
                <TouchableOpacity
                onPress={this.myButtonPress}
                >
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#c1c1c1",
        alignItems: "center",
        justifyContent: "center"
    },
    text:{
        fontSize:30,
        backgroundColor: "#25CCF7",
        paddingVertical:12,
        paddingHorizontal:40,
        color:"#ffffff",
        borderRadius:10,
        borderWidth:3,
        borderColor:"#fff"
    }
});
