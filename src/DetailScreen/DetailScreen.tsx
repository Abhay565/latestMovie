// import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
// import React,{useEffect,useState} from 'react'
// import { AirbnbRating } from 'react-native-ratings';

// const DetailScreen = ({ route, navigation } :any) => {

//   const {original_title, backdrop_path,vote_average}=route.params;
//   const {overview, poster_path, popularity}= route.params.rest;

//   const version = vote_average;
//   const checkVote_average = parseFloat(version).toFixed(1);

//   return (
//     <SafeAreaView style={styles.scroll}>
//   <ScrollView  >
    
//       <View  >
//         <Image style={styles.poster_path} source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}`}}/>
//       </View>
         
//          <View style={{flexDirection:'row',alignItems:'center'}}>
//       <View style={styles.container}>
//          <Image style={styles.backdrop_path1} source={{ uri: `https://image.tmdb.org/t/p/w500${backdrop_path}`}}/>     
//     </View>
//     <View style={styles.desc} >
//       <Text style={styles.title}>{original_title}</Text>

//        <View style={{flex:1,flexDirection:"column"}} >
//         <AirbnbRating count={10} defaultRating={vote_average} size={7} selectedColor='purple' />
//         <Text style={styles.vote}>{checkVote_average}</Text>
//        </View>

//       <View>
//         <View style={styles.rating}>
//           <Text>Rating</Text>
//           <Text>Grade Now</Text>
//         </View>

//         <View style={styles.rating}>
//           <Text>Popularity</Text>
//           <Text style={styles.popularity} >{popularity}</Text>
//         </View>

//         <View style={styles.rating}>
//           <Text>Revenue</Text>
//           <Text  >{popularity}</Text>
//         </View>
//       </View>
        
//       </View>

//     </View>

//     <View style={{margin:10 }}>
//       <Text style={{color:'#fff',fontSize:20,marginBottom:10}}>Story Line</Text>
//     <Text style={{}}>{overview}</Text>

//     </View>
//   </ScrollView>
//   </SafeAreaView>
//   )
// }

// export default DetailScreen;

// const styles= StyleSheet.create({
//   scroll:{
//     flex:1,
//     backgroundColor: "#808080"
//   },
//   container:{
//     margin: 6,
//     padding: 6,
//   },
  
//   desc:{
//  flex:0.9,
//  position:'relative',
//  bottom:50
//   },
//   popularity:{
//     color: "white",
//     fontSize: 18
//   },
//   poster_path:{
//     // alignSelf:"stretch",
//     width: '100%',
//     height:310,
//     resizeMode:"stretch",
//     backgroundColor: "transparent",
//     justifyContent: "center",
//     alignItems: "center",
//     borderBottomWidth: 70,
//     borderBottomColor: "red",
//     borderBottomRightRadius: 80,
//     borderBottomLeftRadius: 80,
   
//   },
//   backdrop_path1:{
//    height: 150,
//    width: 100,
//   resizeMode:"cover",
//   position:'relative',
//   bottom:50
// },
//   title:{
//     color: "white",
//     fontSize: 18
//   }, 
//   vote:{
//     fontSize:22,
//     color:"purple"
//   }, 
//   desc_container:{

//   },
//   rating:{
//     flex:1, 
//     flexDirection:"row",alignItems:"flex-end",
//     justifyContent:"space-between" 
//   }
// })