import React, { Component } from 'react'
import {View ,Image,Text,StyleSheet,Dimensions,FlatList, ScrollView,TouchableOpacity,AsyncStorage}from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import Button from 'react-native-button'
import ImagePicker from 'react-native-image-picker';
import {Actions} from 'react-native-router-flux';
const {width}=Dimensions.get('window');
const data1 = [
    {
        title: '账户管理',
        name:'setting'
    },
    {
        title: '收货地址',
        name:'enviroment'
    },
    {
        title: '我的信息',
        name:'idcard'
    },
    {
        title: '我的订单',
        name:'form'
    },
    {
        title: '我的二维码',
        name:'qrcode'
    },
    {
        title: '我的积分',
        name:'redenvelopes'
    },
    {
        title: '我的收藏',
        name:'staro'
    }   
]
const data2 = [
    {
        title: '居家维修保养',
        name:'tool'
    },
    {
        title: '出行接送',
        name:'car'
    },
    {
        title: '我的受赠人',
        name:'user'
    },
    {
        title: '我的住宿优惠',
        name:'gift'
    },
    {
        title: '我的活动',
        name:'flag'
    },
    {
        title: '我的发布',
        name:'form'
    },
   
]
const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
 
export default class My extends Component {

    constructor(){
        super();
        this.state={
            imgurl:''
        }
    
    }
    componentDidMount(){
        AsyncStorage.getItem('imgurl').then((res)=>{
            this.setState({
                imgurl:JSON.parse(res)
            })
        })
    }
    takePhoto=()=>{
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
              return;
            } else if (response.error) {
              console.log('Error:', response.error);
            } else if (response.customButton) {
              console.log('custom:', response.customButton);
            } else {
                
              const source = { uri: response.uri };
              AsyncStorage.setItem('imgurl',JSON.stringify(source)).then((res)=>{
                console.log('存储成功');
            })
                console.log(source);
              this.setState({
                imgurl: source,
              });
            }
          });
    }
    toList=(obj)=>{
        
        if(obj.item.title=='我的发布'){
            
            Actions.list();
        }
    }
    render() {

        return (
           <ScrollView style={{flex:1}}>
            <View >
                <View style={styles.top}>
                    <TouchableOpacity  onPress={()=>{this.takePhoto()}}>
                        <Image style={styles.pic} source={this.state.imgurl?this.state.imgurl:require('../../assets/images/1.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.name}>BINNU DHILLON</Text>
                </View>
                <View style={{marginBottom:4}}>
                    <View style={styles.my}>
                        <Icon name='user' size={20} color='#c3c3c3' style={{marginRight:20}}/>
                        <Text style={{color:'#4f4e4e',fontSize:18}}>我的个人中心</Text>
                    </View>
                    <FlatList
                        style={{backgroundColor:'white'}}
                        data={data1}
                       
                         numColumns={3}
                         renderItem={
                             ({item})=>
                             <TouchableOpacity onPress={()=>{this.toList({item})}}>
                                <View style={styles.slides}>  
                                    <Icon name={item.name} color='#c3c3c3' size={30}/>
                                    <Text style={{fontSize:18,marginTop:10}}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                         }
                    />
                </View>
                <View >
                    <View style={styles.my}>
                        <Icon name='tagso' size={20} color='#c3c3c3' style={{marginRight:20}}/>
                        <Text style={{color:'#4f4e4e',fontSize:18}}>E族活动</Text>
                    </View>
                    <FlatList
                      
                        data={data2}
                         numColumns={3}
                         renderItem={
                             ({item})=>
                             <TouchableOpacity onPress={()=>{this.toList({item})}}>
                                <View  style={styles.slides}>  
                                    <Icon name={item.name} color='#c3c3c3' size={30}/>
                                    <Text style={{fontSize:18,marginTop:10}}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                         }
                    />
                </View>
                <View style={{justifyContent:'center',width:width,height:100,alignItems:'center'}}>
                    <Button onPress={()=>{Actions.login();AsyncStorage.setItem('isloading','false')}} style={styles.btn}>点击退出</Button>
                </View>
            </View>
           </ScrollView>
        )
    }
}

 
 
const styles = StyleSheet.create({
 top:{
    width:width,
    height:200,
    backgroundColor:'#f23030',
    justifyContent:'center',
    alignItems:'center'
 },
 pic:{
     width:100,
     height:100,
     borderWidth:2,
     borderRadius:50,
     borderColor:'white',
     marginBottom:10
 },
 name:{
     color:'white',
     fontSize:18
 },
 my:{
     alignItems:'center',
     flexDirection:'row',
     width:width,
     height:60,
     backgroundColor:'white',
     marginBottom:1,
     paddingLeft:20
 },
 slides:{
     width:0.33*width,
     height:100,
     fontSize:18,
     color:'#4f4e4e',
     alignItems:'center',
     justifyContent:'center',
     backgroundColor:'white'
 },
 bottom:{
     width:width,
     height:100,
     justifyContent:'center',
     alignItems:'center'
 },
 btn:{
    width:0.8*width,
    height: 50,
    borderRadius: 10,
    textAlignVertical: 'center',
    backgroundColor:'#f23030',
    color: '#fff' 
},


 
});