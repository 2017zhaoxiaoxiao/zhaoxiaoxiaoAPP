import React, { Component } from 'react'
import { Text, View,StyleSheet,Image ,AsyncStorage, TouchableOpacity} from 'react-native'
import Swiper from 'react-native-swiper';
export default class SwiperPage extends Component {
    start=()=>{
        AsyncStorage.setItem('isInstall','true',()=>{
           
            this.props.afterInstall();
        });
       
    }
    render() {
        return (
           
               <Swiper  
                    horizontal={true} 
                    showsPagination={true}
                    dotColor='white'
                    autoplay={true}
                    // showsButtons={true}
                    
                    >
                    <View style={styles.slide}>
                    <Image style={styles.img}  source={require('../../assets/1.jpeg')}/>
                    </View>
                    <View style={styles.slide}>
                    <Image style={styles.img}   source={require('../../assets/2.jpg')}/>
                    </View>
                    <View style={styles.slide}>
                    <Image style={styles.img}  source={require('../../assets/3.jpg')}/>
                   
                    <TouchableOpacity style={styles.start} onPress={this.start}>
                        <Text style={{color:'#fff'}}>开始体验</Text>
                    </TouchableOpacity>
                    </View>
                   
                    </Swiper>
           
        )
    }
}

const styles = StyleSheet.create({
    slide:{
        flex:1,
        width:'100%',
        height:'100%',
        alignItems:'center'
       
      
    },
    img:{
        width:'100%',
        height:'100%'
    },
    start:{
        bottom:100,
        width:80,
        height:40,
        color:'#fff',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'blue',
        borderRadius:20
     
       
    }
})
