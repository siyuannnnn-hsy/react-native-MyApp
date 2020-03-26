import React, { Component } from 'react'
import {View,Easing,Animated,Text,ActivityIndicator, ScrollView,StyleSheet,Dimensions,FlatList} from 'react-native'
import Button from 'react-native-button'
import {  MessageBarManager } from 'react-native-message-bar';
import {Actions} from 'react-native-router-flux'

const {width} = Dimensions.get('window');

export default class Home extends Component {
    constructor(){
        super();
        let data = [];
        for(var i =0 ;i<10;i++){
            data.push({tit:i,key:i});
        }
        this.state = {
            data,
            width:new Animated.Value(20)
        }
    }
    // 定义动画形式
    zoom = ()=>{
        Animated.timing(this.state.width,{
            toValue:200,
            easing:Easing.elastic()//效果
        }).start()
    }
    render() {
        return (
            <View>
                {/* 加载中 转圈圈那个 */}
                <View style={{alignItems:'center'}}>
                    <Button onPress={()=>Actions.mylist()}
                            style={styles.btn}
                    >跳转Mylist</Button>
                </View>
                 
                 {/* 动画 */}
                <Button onPress={()=>{this.zoom()}}
                            style={styles.btn}
                    >变大</Button>
                <Animated.View style={{
                    width:this.state.width,
                    height:200,
                    backgroundColor:'#ccc'
                }}>

                </Animated.View>

                {/* horizontal:实现水平滚动 */}
                {/* numColumns:实现分栏布局 */}
                {/* <FlatList 
                    ListHeaderComponent={
                            <Button 
                                style={styles.btn}
                                onPress={()=>{
                                    MessageBarManager.showAlert({
                                        title:'提示标题',
                                        message:'具体信息',
                                        alertType:'info',
                                        StyleSheetInfo:{backgroundColor:'red'}
                                    })
                                }}
                            >头部按钮
                            </Button>}
                    ListFooterComponent={<Text>尾部</Text>}
                    numColumns={2}
                    data={this.state.data}
                    renderItem={
                        ({item})=><View style={styles.slide}>
                                <Text>{item.tit}</Text>
                            </View>
                        }
                /> */}

                {/* 轮播图 */}
                {/* <View>
                    <ScrollView 
                        pagingEnabled={true} 
                        horizontal={true}
                        style={{height:300}}
                    >
                        <View style={styles.slide}>
                            <Text>1</Text>
                        </View>
                        <View style={styles.slide}>
                            <Text>2</Text>
                        </View>
                        <View style={styles.slide}>
                            <Text>3</Text>
                        </View>
                    </ScrollView>
                </View> */}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    slide:{
        width:width*0.4,
        height:300,
        marginLeft:width*0.06,
        marginTop:10,
        backgroundColor:'#ccc',
        justifyContent:'center',
        alignItems:'center'
    },
    btn:{
        width:200,
        height:40,
        borderRadius:20,
        color:'#fff',
        backgroundColor:'#ccc',
        textAlignVertical:'center'
    }
})