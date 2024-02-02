import { View, Text, Image, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import { MOVIE_LIST } from '../../constant/Api';


const MovieList = () => {

   const [myData, setMyData]= useState([]); 
  
  useEffect(()=>{
    axios.get(MOVIE_LIST,{
        params: {
            api_key: "5416306a2735604945fd08b4cbfcb5fb",
            language: "en-US",
            sort_by: "popularity.desc",
        }
    })
    .then((res)=> { setMyData(res.data.results); 
      })
      .catch((error)=>{console.error("error-----",error) })
  },[])

  
    return (<>
   {myData? <SafeAreaView style={{flex:1}}>
      {/* {myData.map((item, index)=>{
        return(
           <Card item={item} key={index} />
        )
      })} */}
      
      <FlatList style={{marginBottom:100}}
      data={myData}
      numColumns={2}
      renderItem={({item,index})=><Card key={index} item={item} 
      />
      }
      />
    </SafeAreaView> : 
    <View style={{flex:1,alignItems:"center",marginTop:200}}>
    <Text style={{fontSize:24,color:"rgb(255, 100, 100)"}}>Please wait...</Text> 
    </View>
    }
    </>
  )
}

export default MovieList;

const style=StyleSheet.create({});