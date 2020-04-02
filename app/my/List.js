import React, { Component } from 'react'
import { Text, View, StatusBar,StyleSheet,Dimensions,ToastAndroid, ScrollView, TextInput} from 'react-native'
import Button from 'react-native-button'
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';
const {width}=Dimensions.get('window');
const styles = StyleSheet.create({
    list:{
        width:0.35*width,
        color:'#777',
        fontSize:15
    },
    item:{
        flexDirection:"row",
        width:width,
        height:50,
        overflow:"hidden",
        paddingLeft:10,
        paddingRight:10,
        alignItems:'center'
        
    },
    bot:{
        backgroundColor:'white',
        height:200,
        width:width,
        flexDirection:"row",
        justifyContent:'space-around',
        alignItems:'center'
    },
    btn:{
        backgroundColor:'red',
        color:'white',
        width:80,
        height:40,
        borderRadius:10,
        textAlignVertical: 'center'
    },
    nav:{
        width:width,
        height:60,
        backgroundColor:'red',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
 
});

export default class List extends Component {
    res='';
    constructor(){
        super();
        this.state={
            data:[],
            page:1
        }
    }
    componentDidMount(){
        let url='https://cnodejs.org/api/v1/topics?page='+this.state.page
        fetch(url+'&limit=12')
		.then(res=>res.json())
		.then((res)=>{
                this.setState({
                    data:res.data
                    
                })
               
            }).catch(error => console.log('error is', error));
    }
    componentDidUpdate(prevProps,prevState){
        if(this.state.page!=prevState.page){
        let url='https://cnodejs.org/api/v1/topics?page='+this.state.page
        fetch(url+'&limit=12')
		.then(res=>res.json())
		.then((res)=>{
                this.setState({
                    data:res.data
                    
                })
               
            }).catch(error => console.log('error is', error));
        }
       
    }
    front=()=>{
        if(this.state.page===1){
            ToastAndroid.show("这是第一页",ToastAndroid.SHORT)
        }
        if(this.state.page>1){
            this.setState({
                page:this.state.page-1
            })
         
        }

    }
    after=()=>{
        if(this.state.page<10){
            this.setState({
                page:this.state.page+1
            })
           
        }
      
    }
    render() {

        return (
           <ScrollView style={{width:width}}>
            <View style={{flex:1}}>
                <View style={styles.nav}>
                    <Icon onPress={()=>{Actions.pop()}} color='white' size={30} name='left'/>
                    <Text style={{fontSize:18,color:'white'}}>我的发布</Text>
                    <Icon color='white' size={30} name='ellipsis1'/>
                </View>
                <View style={{backgroundColor:'white',width:width}}>
                {
                    this.state.data.map((item)=>{  
                          this.res=Math.random()>0.5?( <Text style={{fontSize:15,color:'#777',marginLeft:width*0.1}}>已回复</Text>)
                                :( <Text style={{fontSize:15,color:'red',marginLeft:width*0.1}}>待回复</Text>);
                                
                                return(  
                                <View style={styles.item}>  
                                    <Text style={styles.list} numberOfLines={1} ellipsizeMode={'tail'}>{item.title}</Text> 
                                    <Text style={{marginLeft:width*0.12,color:'#777',fontSize:16}} >{item.last_reply_at.slice(0,10)}</Text>
                                    {this.res}
                                </View>
                                )
                        
                    })
                    }
                </View>
                <View style={styles.bot}>
                    <Button onPress={()=>this.front()} style={styles.btn} >上一页</Button>
                    <Text>第{this.state.page}页</Text>
                    <Button onPress={()=>this.after()} style={styles.btn}>下一页</Button>
                </View>
            </View>
            </ScrollView>
           
        )
    }

}

