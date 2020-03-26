import React,{useState,useEffect}  from 'react';
import {StyleSheet,View,Text,Image,BackHandler,ToastAndroid,AsyncStorage } from 'react-native';
import {Router,Scene,Tabs,Drawer,Lightbox,Modal, Overlay, Actions} from 'react-native-router-flux';
// import Doc from './components/Doc';
// import Msg from './components/Msg';
// import MsgDetail from './components/MsgDetail';
import {Gird,Icon} from '@ant-design/react-native';
import MyBox from './components/MyBox';
// import ShowMyName from './components/ShowMyName';
// import Login from './components/Login';
// import Home from './components/Home';
// import Message from './components/Message';
// import Mylist from './components/Mylist';
// import LocalPage from './components/LocalPage';
// import Test from './components/Test';
// import MyTs from './MyTs';
import SplashScreen from 'react-native-splash-screen';
import Home from './src/home/Home';
import Goods from './src/goods/Goods';
import User from './src/userinfor/Userinfor'
import Login from './src/common/Login';
import SwiperPage from './src/common/SwiperPage';

//npm run android 或者 react-native run-android在模拟器或者真机上装的
//是测试版本的安装包，不要每天装一次，以后只需要执行npm start起服务即可
//然后点开App，服务界面就会编译文件

//连接真机 在设置 关于手机 连击7次手机版本 会出来开发者选项
//测试连没连上：adb devices

//练好手机在执行
//adb reverse tcp:8081 tcp:8081
//在执行服务

//执行 ./gradlew ，打包出一个签名好的可用于发布的版本的安装包 不可以在调试了

//图标安装完后，要link，link成功后卸载App，再重新npm run android
// 重装完以后，APP停止运行的，卸载除了react-native-router-flux之外的没用的包
//yarn remove 包名   删除包
// 每新装完一个包，服务会自动停止，要重新开一下

// let num : number = 100;

//App logo 将项目myApp\android\app\src\main\res下的文件夹下的图片 名字不改
// 启动画面：react-native-splash-screen
//如果第一次安装，一般来说都有一个引导页(普通轮播图)，注意本地存储记录下来
// 看功能，是否需要先登录，如果需要先登录，登录完记录状态(用户信息)
// 再次进入的时候，也要从本地判断是否登录过

// react本地存储是异步的

const styles = StyleSheet.create({
   
});
// const rootUrl = 'https://www.fastmock.site/mock/5f5b816cfc78f3ca6777ff6a27e2e1bd/api'
const App = () => {
  let [isLogin,setLogin] = useState(false);
  let [isInstall,setInstall] = useState(true);
  useEffect(()=>{
    // AsyncStorage.removeItem('user');
    AsyncStorage.getItem('isInstall')
      .then(res=>{
        console.log('isinstall',res)
        if(res){
          setInstall(false);
        }
      })
    AsyncStorage.getItem('user')
      .then(res=>{
        let user = JSON.parse(res)
        if(!user){SplashScreen.hide();}
        if(user&&user.token){
          setLogin(true)
          SplashScreen.hide();
          console.log(isLogin)
        }
      })
  //   fetch(rootUrl+'/topics')
  //     .then(res=>res.json())
  //     .then(res=>console.log(JSON.stringify(res)))
	},[])

  let now = 0;
  let afterInstall = () => {
    console.log('after install')
    setInstall(false)
  }
  if(isInstall){
    return <View style={{flex:1}} afterInstall><SwiperPage afterInstall={afterInstall}/></View>
  }

  return (
    <Router 
          backAndroidHandler={()=>{
            if(Actions.currentScene != 'home'){
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
      <Overlay>
      {/* 实现Tabs */}
      {/* Router里面只能放一个组件,将全部跳转页面都放在Root下面 */}
        <Modal key='modal' hideNavBar>
          <Lightbox key='lightbox'>
            <Drawer 
                key='drawer' drawerPosition='left' drawerWidth={400}
                drawerIcon={()=><Icon name='menu'/>}
                contentComponent={()=><Text>drawer</Text>} 
            >
              
              <Scene key='root'>
                <Tabs key='tabbar' hideNavBar activeTintColor='red' 
                      inactiveTintColor='blue' tabBarStyle={{backgroundColor:'#ccc'}}
                >
                  {/* <Scene key='msg' title='消息' 
                        icon={
                          ({focused})=><Icon 
                                          color={focused?'red':'green'} name='home'/>} > */}
                  <Scene key='home' title='首页' 
                        icon={
                          ({focused})=><Icon 
                                          color={focused?'red':'green'} name='home'/>} >                         
                    <Scene key='home' component={Home}/> 
                    {/* <Scene key='ms' component={Msg}/> */}
                    {/* <Scene key='msgdetail' component={MsgDetail} hideTabBar/> */}
                  </Scene>
                  
                  {/* <Scene key='home' title='首页' 
                          icon={({focused})=><Icon  color={focused?'red':'green'} name='home'/>} 
                        > */}
                      <Scene key='goods' title='商品' 
                          icon={({focused})=><Icon  color={focused?'red':'green'} name='home'/>} 
                        >
                          <Scene key='goods'  component={Goods}/>
                          
                          {/* <Scene key='myts' hideNavBar={true} component={MyTs}/> */}
                          {/* <Scene key='test' hideNavBar={true} component={Test}/> */}
                      {/* <Scene key='localpage' hideNavBar={true} component={LocalPage}/> */}
                    {/* <Scene key='home' component={Home}/> */}
                    {/* <Scene hideTabBar hideDrawerButton key='mylist' component={Mylist}/> */}
                  </Scene>
                        

                  {/* <Scene key='doc' title='文档' 
                          icon={({focused})=><Icon  color={focused?'red':'green'} name='home'/>} 
                        component={Doc}
                  > */}
                    <Scene key='user' title='我的' 
                          icon={({focused})=><Icon  color={focused?'red':'green'} name='home'/>} 
                        component={User}
                  >
                    {/* <Scene key='docs' component={Doc}/> */}
                  </Scene>
                </Tabs>
              </Scene>
            </Drawer>
            <Scene key='light' component={MyBox}/>
          </Lightbox>
          <Scene key='login' initial={!isLogin} component={Login}></Scene>
          {/* <Scene key='login' component={ShowMyName}/> */}
          {/* <Scene key='login1' component={Login}/> */}
        </Modal>
        {/* <Scene component={Message}/> */}
      </Overlay> 

      {/* 实现跳转 传递 */}
      {/* <Scene key='root'>
            //默认显示第一个scene initial设置默认页面
        <Scene key='msg' title='消息' component={Msg}
               titleStyle={{flex:1,textAlign:'center',color:'red'}}
        />
        <Scene key='msgdetail' title='消息详情' backTitle='消息'
               backButtonImage={require('./assets/icon/user.png')}
               component={MsgDetail}
               titleStyle={{flex:1,textAlign:'center',color:'red'}}
               renderRightButton={<View></View>}
        />
        <Scene key='doc' title='文档' component={Doc}
               titleStyle={{flex:1,textAlign:'center'}}
               renderRightButton={<View></View>}
        />
      </Scene>
     */}

    </Router>
   
  )
};

export default App;
