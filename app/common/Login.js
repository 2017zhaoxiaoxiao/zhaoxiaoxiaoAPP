import React, {Component} from 'react';
import {View, Text, Image, TextInput,AsyncStorage, TouchableOpacity,ToastAndroid,BackHandler} from 'react-native';
import { Icon, WhiteSpace } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils'
var now = 0;
export default class Login extends Component {
  
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            isloading:'false'
        }
       
    }

    componentDidMount(){
      BackHandler.addEventListener('hardwareBackPress', this.handleBack)
      AsyncStorage.getItem('isloading').then((res)=>{
        this.setState({
          isloading:res
        })
      })
    
    }
    componentWillUnmount() {
     
      BackHandler.removeEventListener('hardwareBackPress', this.handleBack)
  }
  handleBack = () => {
   
    if(Actions.currentScene != 'login'){
        Actions.pop();
        return true;
    }else{
     
        if(new Date().getTime()-now<2000){
            BackHandler.exitApp();
        }else{
            ToastAndroid.show('确定要退出吗',100);
            now = new Date().getTime();
            return true;
        }
    }
    
    
  }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    login = ()=>{
      if(this.state.username==""||this.state.pwd==""){
        ToastAndroid.show("账号或密码不能为空",ToastAndroid.SHORT);
        return false;
      }
        AsyncStorage.getItem('user').then((res)=>{
          // console.log(res);
          if(res==null)
            ToastAndroid.show("请先注册",ToastAndroid.SHORT);
          else{
            let user=JSON.parse(res);
            for(var i=0;i<user.length;i++){
              if(user[i].username==this.state.username&&user[i].pwd==this.state.pwd){
                AsyncStorage.setItem('isloading','true');
                this.setState({
                  isloading:'true'
                })
                Actions.home();
                return true;
              }
            }
            ToastAndroid.show("账号或密码错误",ToastAndroid.SHORT); 
            AsyncStorage.setItem('isloading','false')
            
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
                onPress={this.login}>
                <Text style={{ color:'white'}}>登录</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={{
                    width: '80%',
                    height: 40,
                    color:'white',
                    backgroundColor: 'red',
                    marginTop: 30,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={()=>{Actions.register()}}
              >
                <Text  style={{ color:'white'}}>去注册</Text>
            </TouchableOpacity>
        </View>
        {
          this.state.isloading=='true'?ToastAndroid.show("正在登陆",ToastAndroid.SHORT):null
        }
      </View>
    );
  }
}