import React , {useEffect,useState} from 'react';
import {Router, Scene,Tabs,Modal,Actions} from "react-native-router-flux";
import {
    View, 
    AsyncStorage,
    ToastAndroid,
    BackHandler
  } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import Icon from 'react-native-vector-icons/AntDesign';
import Home from './app/home/Home';
import Goods from './app/goods/Goods';
import My from './app/my/My';
import Car from './app/shoppingcar/Car';
import List from './app/my/List';
import Login from './app/common/Login';
import SwiperPage from './app/common/SwiperPage';
import Register from "./app/common/Register"
console.disableYellowBox=true;//去掉黄色提示
const App=() => {    
    let [isInstall,setInstall]=useState(true);
    let [isLogin,setLogin]=useState(false);
    let now = 0;
    let init=()=>{
       
       
        AsyncStorage.getItem('isInstall').then(res=>{
          if(res){
            setInstall(false);
          }
        })
        AsyncStorage.getItem('isloading').then(res=>{
          if(res=='false'){
            SplashScreen.hide();
          }
          else if(res=='true'){
            setLogin(true);
            SplashScreen.hide();
          }
        })
       
      }
   useEffect(()=>{
    init();
    setTimeout(SplashScreen.hide,500);
  
   },[] )
   let afterInstall=()=>{
    setInstall(false)
  }
  if(isInstall){
    return <View style={{flex:1}}>
          <SwiperPage afterInstall={afterInstall}/>
        </View>
  }
  return (
      <Router
      backAndroidHandler={()=>{
       
        if(Actions.currentScene != '_home'){
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
        
      }}
      >
      <Modal key="modal" hideNavBar>
        <Scene key='root' >
            <Tabs key="tabbar"
                hideNavBar
                activeTintColor='red'
                inactiveTintColor='gray'
                tabBarStyle={{backgroundColor:'white'}}
            >
                   
                <Scene 
                    hideNavBar
                    key='home'
                    icon={({focused})=>
                    <Icon 
                    color={focused?'red':'gray'} 
                    size={20}
                    name='home'/>}
                    title='首页'
                    component={Home}
                />

                   
                
               
                <Scene key='goods'
                    hideNavBar
                    key='goods'
                    title='商品分类'
                    icon={
                    ({focused})=><Icon 
                        color={focused?'red':'gray'} 
                        name="appstore-o"
                        size={20}
                    />
                    }  
                    component={Goods}      
                />    
                    
               

               
                <Scene 
                    key='car'
                    hideNavBar
                    icon={({focused})=>
                    <Icon 
                        color={focused?'red':'gray'} 
                        name='shoppingcart'
                        size={20}
                    />}
                       title="购物车"
                      
                      component={Car}
                />
                 <Scene 
                    key='my'
                   
                    icon={({focused})=>
                    <Icon 
                        color={focused?'red':'gray'} 
                        name='user'                        
                        size={20}    
                    />}
                       title="个人中心"
                      
                    
                >
                    <Scene key='my' hideNavBar component={My}/>
                    <Scene key="list" hideTabBar hideNavBar   component={List}/>
                   
                </Scene>
            </Tabs>
        </Scene>
        <Scene initial={!isLogin} key="login" component={Login}/>
        <Scene  key="register" component={Register}/>
        </Modal>      
         
      </Router>
    
  );
};

export default App;