import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useState } from 'react'
import Navigation from '../../Navigation/Navigation';
import { useNavigation } from '@react-navigation/native';
import { AirbnbRating } from 'react-native-ratings';


const Card = (props: any) => {
 const navigation =useNavigation();

 const {id,backdrop_path,original_title,release_date, vote_count,vote_average,...rest}: any = props.item;
 const version = vote_average;
const checkVote_average = parseFloat(version).toFixed(1);
 
 const [star, setStar]= useState(2);

useEffect(()=>{setStar(vote_average)},[vote_average])
 
 return (
 <View style={styles.container} key={id}>
  <TouchableWithoutFeedback onPress={()=> {navigation.navigate('DetailScreen',{
   id: id,
   rest: rest,
  })} }  >
     <View  style={styles.grid}>
      <Image style={styles.image} source={{ uri: `https://image.tmdb.org/t/p/w500${backdrop_path}`}} />
      <Text style={styles.title}
      ellipsizeMode='tail'
      numberOfLines={1}
      >{original_title}</Text>
      
      <View style={styles.desc} >
         <AirbnbRating
           ratingContainerStyle={{paddingBottom:45}}
           selectedColor='purple'
           count={9}
           defaultRating={star}
           size={6.5}
           isDisabled={true}
         />
        <Text style={styles.vote_average}>({checkVote_average})</Text> 
      </View>

      <View style={styles.data}>
        <Text style={styles.release_date} >{release_date}</Text>
        <Text style={styles.vote_count}>Vote({vote_count})</Text>
      </View> 

     </View>
  </TouchableWithoutFeedback>
 </View>
 )
}

export default Card;

const styles = StyleSheet.create({
    container:{
     flex:1,
     flexWrap:"wrap",
     alignContent: "flex-end",
     
    },
   grid:{
    padding:8,
    margin: 8,
   },
   image:{
    height:150,
    width:130,
    borderRadius:10,

   },
   title:{
    color: "white",
    fontSize: 18
   }, 
   release_date:{
    color: "rgba(255, 255, 255, 0.7)",
    fontSize:12
   },
   vote_count:{
    color: "rgba(255, 255, 255, 0.5)",
    fontSize:12
   },
   data:{
   flexDirection:"row",
   justifyContent:"space-between",
   marginTop: -40
   },
   vote_average:{
      color: "rgba(255, 255, 255, 0.5)",
      fontSize:12,
   },
   desc:{
      color: "rgba(255, 255, 255, 0.5)",
      flexDirection:"row" ,
      alignItems:"center",
      marginTop: -45
   },
   star:{
      color: "purple",
      
   }
})