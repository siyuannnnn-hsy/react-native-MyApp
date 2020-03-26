import React, { Component } from 'react'
import {View,Text,StyleSheet,Button,Easing,Animated} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {WebView} from 'react-native-webview'

export default class MyBox extends Component {
    constructor(){
        super();
        this.state = {
            opacity:new Animated.Value(0)
        }
    }
    componentDidMount(){
        Animated.timing(this.state.opacity,{
            toValue:1,
            duration:2000
        }).start()
    }
    back = ()=>{
        Animated.timing(this.state.opacity,{
            toValue:0,
            duration:2000
        }).start(Actions.pop)
    }
    render() {
        return (
            <View style={styles.container}>
                <Animated.View 
                    style={
                        [{opacity:this.state.opacity},styles.innerBox]
                    }>
                    <Button title='返回' 
                        onPress={
                            this.back
                        }
                    />
                    
                    <WebView source={{uri:'https://baidu.com'}}/>
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        // backgroundColor:'transparent',
        backgroundColor:'rgba(50,50,50,0.5)',
        position:'absolute',
        left:0,
        top:0,
        right:0,
        bottom:0,
        justifyContent:'center',
        alignItems:'center'
    },
    innerBox:{
        width:'80%',
        height:'50%',
        backgroundColor:'#ccc'
    }
})