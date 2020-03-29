import React, { Component } from 'react'
import {View ,Text,StyleSheet,Image,TextInput,Dimensions,ScrollView,FlatList}from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import Button from 'react-native-button'
import Swiper from 'react-native-swiper';
const {width}=Dimensions.get('window');
const goods = [
    {
        title: '居家维修保养',
      
        img: require('../../assets/images/a.png')
    },
    {
        title: '住宿优惠',
        
        img: require('../../assets/images/b.png')
    },
    {
        title: '出行接送',
        
        img: require('../../assets/images/c.png')
    },
    {
        title: 'E族活动',
        
        img: require('../../assets/images/d.png')
    }
]
export default class Home extends Component {
   
    render() {
        return (
            <ScrollView>
            <View>
                <View style={styles.top} >
                    <View style={styles.search}>
                        <Icon name='search1' color='white' size={20}/>
                        <TextInput placeholder="请您要搜索的关键字" placeholderTextColor='white' style={{fontSize:16,color:'#999',width:'70%',height:40}} ></TextInput>   
                    </View>
                    <Icon name='shoppingcart' color='white' size={26} style={{marginLeft:20}}/>
                </View>
                <View style={{height:200}}>
                 <Swiper  
                    horizontal={true} 
                    showsPagination={true}
                    dotColor='white'
                    activeDotColor='red'
                    autoplay={true}
                    
                    >
                    <View style={styles.slide}>
                    <Image  style={{width:'100%',height:200}} source={{uri:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2667314336,4117732736&fm=26&gp=0.jpg"}}/>
                    </View>
                    <View style={styles.slide}>
                    <Image  style={{width:'100%',height:200}} source={{uri:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2667314336,4117732736&fm=26&gp=0.jpg"}}/>
                    </View>
                    <View style={styles.slide}>
                    <Image  style={{width:'100%',height:200}} source={{uri:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2667314336,4117732736&fm=26&gp=0.jpg"}}/>
                    </View>
                    </Swiper>
                    
                </View>
                <View>
                <FlatList 
                    data={goods}
                    renderItem={({item,key})=>(
                        <View style={styles.good} key={key}>
                            <Image style={{width:60,height:60,marginLeft:'5%'}} source={item.img}/>
                            <Text style={{marginLeft:'10%',width:'20%'}}>{item.title}</Text>
                            <Icon name='right' size={20} color='#cecece' style={{marginLeft:0.35*width}}/>
                        </View>
                    )}
                />
                </View>
                <View style={{justifyContent:'center',width:width,height:100,alignItems:'center'}}>
                    <Button style={styles.btn}>发布需求</Button>
                </View>
                <View style={styles.bottom}>
                    <Text style={{color:'#bcbcbc'}}>e族之家版权所有</Text>
                </View>
            </View>
            </ScrollView>
        )
    }
}

 
 
const styles = StyleSheet.create({
 top:{
     backgroundColor:'#f23030',
     width:'100%',
     height:50,
     justifyContent:"center",
     flexDirection:'row',
     alignItems: 'center'

 },
 search:{
    flexDirection:'row',
    width:'80%',
    height:40,
    borderColor:'white',
    borderWidth:1,
    borderRadius:20,
    backgroundColor:'white',
    opacity:0.7,
    alignItems: 'center',
    paddingLeft:20

 },
 slide:{
    width:width,
    height:200,
    justifyContent:'center',
    alignItems:'center'
},
good:{
    marginTop:8,
    backgroundColor:'white',
    flexDirection:'row',
    height:80,
    width:width,
    alignItems: 'center'
    

},
btn:{
    width:0.8*width,
    height: 50,
    borderRadius: 10,
    textAlignVertical: 'center',
    backgroundColor:'#f23030',
    color: '#fff' 
},
bottom:{
    width:width,
    height:80,
    justifyContent:'center',
    alignItems:'center'
}

 
});