import React, {Component} from 'react';
import {View, Text, Image, TextInput,AsyncStorage, TouchableOpacity,ToastAndroid} from 'react-native';
import { Icon, WhiteSpace } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils'
export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:''
            
        }
    }
    userhandle = (text)=>{
       
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    register = ()=>{
        if(this.state.username==""||this.state.pwd==""){
          ToastAndroid.show("账号或密码不能为空",ToastAndroid.SHORT);
          return false;
        }
        myFetch.post('/login',{
            username:this.state.username,
            pwd:this.state.pwd}
        ).then(res=>{
          var a=JSON.stringify(res.data.token);
          if(a==0){
              ToastAndroid.show("该账户已被注册",ToastAndroid.SHORT);
          }
          else {
            ToastAndroid.show("正在注册",ToastAndroid.SHORT);
            AsyncStorage.getItem('user').then((value)=>{
              if(value==null){
                AsyncStorage.setItem('user',JSON.stringify([res.data]));
              }
              else{
                let all=JSON.parse(value);
                all.push(res.data);
                AsyncStorage.setItem('user',JSON.stringify(all));
              }
            }) 
            ToastAndroid.show("注册成功",ToastAndroid.SHORT);
            Actions.login();
          }
        })      
    } 
  render() {
    return (
      <View style={{flex: 1,justifyContent: 'center'}}>
        <View
          style={{ alignItems: 'center'}}>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="user" color="red"/>
            <TextInput placeholder="用户名" 
                onChangeText={this.userhandle}
            />
          </View>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="user" color="red"/>
            <TextInput 
                onChangeText={this.pwdhandle}
                placeholder="密码" 
                secureTextEntry={true}
            />
          </View>
          <TouchableOpacity 
                style={{
                    width: '80%',
                    height: 40,
                    backgroundColor: 'red',
                    marginTop: 30,
                   
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom:20
                }}
                onPress={this.register}>
                <Text style={{ color:'white'}}>注册</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={{
                    width: '80%',
                    height: 40,
                    backgroundColor: 'red',
                    marginTop: 30,
                   
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom:20
                }}
                onPress={()=>{Actions.login()}}>
                <Text style={{ color:'white'}}>返回登录</Text>
            </TouchableOpacity>
           
           
        </View>
       
      </View>
    );
  }
}