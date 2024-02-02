import { View, Text, ScrollView, FlatList, StyleSheet, SafeAreaView, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AirbnbRating } from 'react-native-ratings';
import { BASE_URL } from '../../constant/Api';
import ReadMore from '@fawazahmed/react-native-read-more';
import CircleContainer from './CircleContainer';


const Detailpage = ({route}:any) => {

    const [myData, setMyData]= useState<any>(null);
   
    const {id}= route.params;
    
  
  useEffect(()=>{
    axios.get(`${BASE_URL}/${id}`,{
        params: {
            api_key: "5416306a2735604945fd08b4cbfcb5fb",
            language: "en-US",
            sort_by: "popularity.desc",
        }
    })
    .then((res)=> { 
        setMyData(res.data);  
      })
      .catch((error)=>{console.error("error-----",error) })
  },[])

  

  return (  <ScrollView style={styles.scroll}>

      { myData ? <>
       
         <Image style={styles.poster_path} source={{ uri: `https://image.tmdb.org/t/p/w500${myData.poster_path}`}}/>
      
         <View style={styles.container} >
          <View style={{flexDirection:'row',alignItems:'center'}}>
       <View style={styles.subContainer}>
          <Image style={styles.backdrop_path1} source={{ uri: `https://image.tmdb.org/t/p/w500${myData.backdrop_path}`}}/>     
     </View>
     
   <View style={styles.desc} >
       <Text style={styles.title}>{myData.original_title}</Text>

         <View style={{marginTop:-40}}>

            <View style={styles.rating} >
                <Text style={{color:"purple",fontSize:20}} >{parseFloat(myData.vote_average).toFixed(1)}</Text>
         <AirbnbRating count={9} defaultRating={myData.vote_average} size={9} selectedColor='purple' />
           </View>
       

       <View>
         <View style={styles.rating}>
           <Text style={{fontSize:14 , color:"rgba(200, 200, 200, 0.8)",fontWeight:"600"}}>Rating</Text>
           <Text style={{fontSize:14 , color:"rgba(200, 200, 200, 0.8)"}}>Grade Now</Text>
         </View>

         <View style={styles.rating}>
           <Text style={styles.popularity} >Popularity:</Text>
           <Text style={styles.popularity} >{myData.popularity}</Text>
         </View>

         <View style={styles.rating}>
           <Text style={styles.revenue}>Revenue:</Text>
          <Text style={styles.revenue}>${myData.revenue}</Text>
         </View>
        </View>
       </View>
        
       </View>

     </View>

       <View style={{marginTop:-30}} >
       <Text style={{color:'#fff',fontSize:20,marginBottom:8}}>Story Line:-</Text>
     <ReadMore numberOfLines={3}>
        <Text style={{}}>{myData.overview}</Text>
     </ReadMore>
     </View>

  <Text style={{marginBottom:-40, marginTop:40, fontSize:18,color:"white" }}>Companies:-</Text>
     <FlatList
     style={{marginTop:40}}
     horizontal={true}
      data={myData?.production_companies}
      renderItem={ ({item, index})=> <CircleContainer item={item} index={index}/> }
     />

   </View>
   </> : 
   <View style={{flex:1,alignItems:"center",marginTop:200}}>
   <Text style={{fontSize:24,color:"rgb(255, 100, 100)"}}>Please wait...</Text> 
   </View>
   }
 </ScrollView> 
)
}

export default Detailpage;



const styles = StyleSheet.create({
    scroll:{
      flex:1,
      backgroundColor: "#808080"

    },
    container:{
      margin: 6,
      padding: 6,
    },
    subContainer:{
        marginRight:6,
        padding: 3,
      },
    desc:{
   flex:0.9,
   position:'relative',
   marginBottom:20
    },
    popularity:{
      color: "white",
      fontSize: 14
    },
    poster_path:{
      width: '100%',
      height: 310,
      resizeMode:"stretch",
      backgroundColor: "transparent",
      justifyContent: "center",
      alignItems: "center",
      borderBottomWidth: 70,
      borderBottomColor: "red",
      borderBottomRightRadius: 80,
      borderBottomLeftRadius: 80,
     
    },
    backdrop_path1:{
     height: 150,
     width: 110,
    resizeMode:"cover",
    position:'relative',
    bottom:30,
  },
    title:{
      color: "white",
      fontSize: 18
    }, 
    vote:{
      fontSize:22,
      color:"purple"
    }, 
    desc_container:{
  
    },
    rating:{
      flex:1, 
      flexDirection:"row",
      alignItems:"flex-end",
      justifyContent:"space-between",
    }, 
    revenue:{
        color:"white",
        fontSize:14
    }
  })