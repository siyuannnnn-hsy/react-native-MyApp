/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,//相当于div
  Text,
  Image,
  ImageBackground,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
  SectionList,
  Dimensions,
  PixelRatio,
  BackHandler,
  ToastAndroid,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ShowMyName from './components/ShowMyName';
import Counter from './components/Counter';
import ImageBg from './components/ImageBg';

//JS动态弱类型 不太严谨 但是灵活
//TypeScript 更加严谨
//RN、angular、Vue3

//创建一个组件 Hello，返回HelloWorld，在APP组件中调用
const Hello = () => {
  return (
    <Text>HelloWorld123</Text>
  )
}


//创建一个组件 ShowMyName，返回hello + 你的名字，名字在调用的时候传入

//写一个 Counter,返回一个数字文本和一个按钮，点击按钮数字加1


const App = () => {
  let isExit = false;
  let now = 0;
  BackHandler.addEventListener('back',()=>{
    console.log(new Date().getTime());
    if(new Date().getTime()-now<2000){
      BackHandler.exitApp();
    }else{
      ToastAndroid.show('确实退出吗',100);
      now = new Date().getTime();
      return true;
    }

    // if(isExit){
    //   BackHandler.exitApp();//退出程序
    //   return false;
    // }
    // ToastAndroid.show('确定要退出吗',ToastAndroid.SHORT)
    // isExit =true;
    // setTimeout(() => {
    //   isExit = false;
    // }, 2000);
    // return true;
  })

  let [val,setVal] = useState('1');
  let [isFresh,setFresh] = useState(false);
  let style = {
    width:100,
    height:100,
    backgroundColor:'red'
  }

  let data = [];
  // useEffect(()=>{
    for(var i=0;i<100;i++){
      data.push({key:i+'',title:i+'abc'})
    }
  // },[])
  let [da,setDa] =useState(data);
  let addData = ()=>{
    for(var i=100;i<200;i++){
      data.push({key:i+'',title:i+'abc'})
    }
    setDa(data)
  }
  let upData = ()=>{
    setFresh(true);
    setTimeout(() => {
      setFresh(false)
    }, 2000);
  }

  const styles = StyleSheet.create({
    box:{
      width:100,
      height:100,
      // backgroundColor:'blue',
      borderColor:'red',
      borderWidth:1,
      margin:10
    },
    box2:{
      width:100,
      height:100,
      // backgroundColor:'blue',
      borderColor:'red',
      borderWidth:1/1.5,
      margin:10
    },
    txt:{
      color:'red'
    },
    size:{
      fontSize:20
    }
  });

  //屏幕信息
  const {width,height} = Dimensions.get('window');
  console.log(width,height)
  console.log(PixelRatio.get())//像素密度的比值
  //px:图片中最小的一格
  //dpi（dot per inch）:每英寸有多少小格（1px）
  //dp:在安卓开发中用的单位，1dp等于像素密度为160dpi时1px的大小。
  //dpi: 120 160 240 320 480
  //比值:0.75 1  1.5  2   3

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <View style={styles.box}></View>
          <View style={styles.box2}></View>

          {/* 实现搜索框 */}
          <View style={{
                      flexDirection:'row',
                      alignItems:'center',
                      justifyContent:'center',
                      height:40
                  }}>
            <View style={{
                  width:'80%',
                  marginRight:10,
                  backgroundColor:'#ccc',
                  flexDirection:'row',
                  alignItems:'center',
                  borderRadius:20,
                  paddingLeft:20
               }}>
                <Image style={{width:20,height:20}} source={require('./assets/icon/user.png')}/> 
                <TextInput  placeholder="搜索"/>
            </View>
            <TouchableOpacity
              style={{
                width:40,
                height:40,
                borderColor:'#ccc',
                borderWidth:1,
                // backgroundColor:'gray',
                borderRadius:20,
                marginLeft:10,
                alignItems:'center',
                justifyContent:'center'
              }}
            >
                <Text style={{color:'#000',fontSize:20}}>+</Text>
            </TouchableOpacity>
          </View>


          {/* flex布局 */}
          {/* 在rn中，组件默认设置了flex属性，默认主轴是竖轴 */}
          {/* justifyContent：定义主轴对齐方式 */}
          {/* alignItems:定义交叉轴对齐方式 */}
          <View  style={{
                    flexDirection:'row',
                    justifyContent:'space-around',
                    flexWrap:'wrap'
                    }}>
            <View style={styles.box}></View> 
            <View style={styles.box}></View>
            <View style={styles.box}></View> 
            <View style={styles.box}></View>
          </View>
         


          {/* 自定义组件 ImageBg*/}
          <ImageBg source={require('./assets/icon/user.png')}
                      style={{width:100,height:100}}>
                    <View style={styles.box}>
                      <Text style={[styles.txt,styles.size]}>ImageBackground</Text>
                    </View>
              </ImageBg>


          {/* 受控组件 */}
          <Text>{val}</Text>
          <TextInput 
            placeholder='请输入内容'
            onChaneText={(val)=>{
                setVal(val)
            }}
            style={{
                borderColor:'red',
                height:50,
                paddingLeft:30,
                borderWidth:1,
                borderRadius:25
            }}/>

          {/* Image */}
          <View>
            {/* 直接显示图片默认大小  */}
            <Image source={require('./assets/icon/user.png')}/>
            {/* 网络图片必须设置大小  */}
            <Image resizeMode='cover' style={{width:100,height:100}} source={{uri:'https://facebook.github.io/react-native/img/tiny_logo.png'}}/>
            <ImageBackground source={require('./assets/icon/user.png')}
                            style={{width:100,height:100}}>
                              <Text style={[styles.txt,styles.size]}>Inside</Text>
            </ImageBackground>
          </View>

          {/* style */}
          <View style={style}></View>
          <View style={styles.box}>
            <Text style={[styles.txt,styles.size]}>hello
              <Text>inner01</Text>
              <Text>inner02</Text>
            </Text>
            {/* text可以继承text的样式，不能继承view的样式 */}
          </View>
        
          <View>
            <Hello/>
            <ShowMyName name='hsy'/>
            <Counter/>
          </View>
        


        </ScrollView>


        {/* FlatList 高性能简单列表组件 */}
        <FlatList 
            data={da}
            onRefresh={upData}
            refreshing={isFresh}
            onEndReached={addData}
            renderItem={({item,index})=>(
            <View><Text>{item.title}</Text></View>
            )}
        />

        {/* SectionList 高性能分组section列表组件 */}
        {/* <SectionList /> */}

      </SafeAreaView>
    </>
  );
};



export default App;
