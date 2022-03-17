import{StyleSheet,View,Text,Image,ImageBackground}from "react-native";
import React from "react";

export default function CharacterDetails(props){
    const {character} = props.route.params;
    return(

        <ImageBackground source={require('../images/portal.jpg')} style={styles.container} >
           
        <ImageBackground source={require('../images/computer.png')} style={styles.content} imageStyle={{ borderRadius: 10}}>
            <Image style={styles.image}source={{uri:character.image}}/>
            <View style={styles.property}>
                <Text style={styles.property_name}>Name: </Text>
                <Text style={styles.property_value}>{character.name}</Text>
            </View>
            <View style={styles.property}>
                <Text style={styles.property_name}>Status: </Text>
                <Text style={styles.property_value}>{character.status}</Text>
            </View>
            <View style={styles.property}>
                <Text style={styles.property_name}>Species: </Text>
                <Text style={styles.property_value}>{character.species}</Text>
            </View>
            <View style={styles.property}>
                <Text style={styles.property_name}>Type: </Text>
                <Text style={styles.property_value}>{character.type || "NA"}</Text>
            </View>
            <View style={styles.property}>
                <Text style={styles.property_name}>Gender: </Text>
                <Text style={styles.property_value}>{character.gender}</Text>
            </View>
            <View style={styles.property}>
                <Text style={styles.property_name}>Location: </Text>
                <Text style={styles.property_value}>{character.location.name}</Text>
            </View>
           </ImageBackground>
        
        </ImageBackground>
    )
}

const styles=StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        backgroundColor:"#24282f",
        borderRadius:30,
    },
    content:{
        flex:1,
        justifyContent:"flex-start",
        alignContent:"center",
        margin:20,
        borderRadius:30,
        elevation:5,
        backgroundColor:"#3c3e44",
        marginBottom:20,
        
    },
    image:{
        margin:10,
        marginTop:20,
        marginBottom:20,
        position:"relative",
        alignSelf:"center",
        width:250,
        height:250,
        borderRadius:100,
        borderColor:"lightblue",
        borderWidth:5,
        
    },
    property:{
        flex:1,
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center",
        margin:0,
        padding:0,
        marginBottom:5,
    },
    property_name:{
        fontWeight:"bold",
        fontSize:24,
        alignSelf:"flex-start",
        color:"lightblue",
        marginLeft:40,
        fontFamily:"serif",
    },
    property_value:{
        width:"70%",
        height:"100%",
        color:"sienna",
        fontSize:22,
        alignSelf:"flex-start",
        marginLeft:40,
        fontFamily:"serif",
    },
    
});