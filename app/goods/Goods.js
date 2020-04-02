import React, { Component } from 'react'
import {
    StyleSheet,
    View, 
    Image,
    TextInput,
    Text,
    ScrollView,
    Dimensions,
    ToastAndroid,BackHandler
  } from 'react-native';
  import { Actions } from 'react-native-router-flux';
  import img1 from '../../assets/images/1.png';
  import img2 from '../../assets/images/2.png';
  const {width}=Dimensions.get('window');
export default class Goods extends Component {
  
    render() {
        return (
            <ScrollView>
                <View>
                    <View style={styles.all}>
                        <View style={styles.top} > 
                            <TextInput placeholder="请输入商品名称" placeholderTextColor='#999' style={{fontSize:18,color:'#999',width:'90%',height:40}} ></TextInput> 
                            <Image style={{width:30,height:20,marginTop:10}} source={require('../../assets/images/3.png')}/>
                        </View>
                    </View>
                    <View style={styles.nav}>
                        <Text style={[styles.tabs,{color:'red'}]}>综合</Text>
                        <Text style={styles.tabs}>销量</Text>
                        <Text style={styles.tabs}>新品</Text>
                        <Text style={styles.tabs}>价格</Text>
                        <Text style={styles.tabs}>信用</Text>
                        
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:10,flexWrap:'wrap'}}>
                
                    <View style={{width:'45%',height:300,backgroundColor:'white',marginBottom:10,paddingLeft:10,paddingTop:'4%'}}>
                        <Image resizeMode='contain' source={img1} style={{marginLeft:'18%',width:'60%',height:'60%',marginBottom:'10%'}}/>
                        <Text style={{color:'#888'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oish/上好佳</Text>
                        <Text style={{color:'red',marginTop:10}}>36.00</Text>
                    </View>
                    <View style={{width:'45%',height:300,backgroundColor:'white',marginBottom:10,paddingLeft:10,paddingTop:'4%'}}>
                        <Image resizeMode='contain' source={img2} style={{marginLeft:'18%',width:'62%',height:'60%',marginBottom:'10%'}}/>
                        <Text style={{color:'#888'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oish/上好佳</Text>
                        <Text style={{color:'red',marginTop:10}}>36.00</Text>
                    </View>
                    <View style={{width:'45%',height:300,backgroundColor:'white',marginBottom:10,paddingLeft:10,paddingTop:'4%'}}>
                        <Image resizeMode='contain' source={img1} style={{marginLeft:'18%',width:'60%',height:'60%',marginBottom:'10%'}}/>
                        <Text style={{color:'#888'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oish/上好佳</Text>
                        <Text style={{color:'red',marginTop:10}}>36.00</Text>
                    </View>
                    <View style={{width:'45%',height:300,backgroundColor:'white',marginBottom:10,paddingLeft:10,paddingTop:'4%'}}>
                        <Image resizeMode='contain' source={img2} style={{marginLeft:'18%',width:'62%',height:'60%',marginBottom:'10%'}}/>
                        <Text style={{color:'#888'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oish/上好佳</Text>
                        <Text style={{color:'red',marginTop:10}}>36.00</Text>
                    </View>
                    <View style={{width:'45%',height:300,backgroundColor:'white',marginBottom:10,paddingLeft:10,paddingTop:'4%'}}>
                        <Image resizeMode='contain' source={img1} style={{marginLeft:'18%',width:'60%',height:'60%',marginBottom:'10%'}}/>
                        <Text style={{color:'#888'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oish/上好佳</Text>
                        <Text style={{color:'red',marginTop:10}}>36.00</Text>
                    </View>
                    <View style={{width:'45%',height:300,backgroundColor:'white',marginBottom:10,paddingLeft:10,paddingTop:'4%'}}>
                        <Image resizeMode='contain' source={img2} style={{marginLeft:'18%',width:'62%',height:'60%',marginBottom:'10%'}}/>
                        <Text style={{color:'#888'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oish/上好佳</Text>
                        <Text style={{color:'red',marginTop:10}}>36.00</Text>
                    </View>
      
       
       
                    </View>
            </View>
        </ScrollView>
        )
    }
}

 
 
const styles = StyleSheet.create({
    all:{
        flexDirection:'row',
        width:width,
        height:40,
        marginTop:10,
        marginBottom:4,
        justifyContent:"center"
        
    },
    top:{
        flexDirection:'row',
        height:40,
        width:0.9*width,
        borderRadius:10,
        backgroundColor:'#eee',
        paddingLeft:10

    },
    nav:{
      flexDirection:'row',
      justifyContent:'space-evenly',
      height:70,
      backgroundColor:'white'
    },
    tabs:{
      paddingTop:20,
      fontSize:20,
      color:'#888'
      
    }
 
});