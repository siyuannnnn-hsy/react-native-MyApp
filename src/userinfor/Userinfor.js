import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'

let actionArr = [
    {title:'维修保养',icon:'home'},
    {title:'维修保养',icon:'home'},
    {title:'维修保养',icon:'home'},
    {title:'维修保养',icon:'home'},
    {title:'维修保养',icon:'home'},
    {title:'维修保养',icon:'home'},
]
export default class Userinfor extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <View>
                {
                    [
                        <View><Text>已回复</Text></View>,
                        <View><Text>已回复</Text></View>
                    ]
                }
                {
                    actionArr.map((item,index)=>{
                        let ran = Math.random();
                        console.log(ran)
                        // if(index == 5){
                        //     return <View onPress={()=>{}}><Text>{item.title}</Text></View>      
                        // }
                        return (
                            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                                <Text>{item.title}</Text>
                                {
                                    ran>0.5?<Text style={{color:'#000'}}>已回复</Text>
                                            :<Text style={{color:'red'}}>未回复</Text>
                                }
                                {/* <Text style={{color:ran>0.5?'#000':'red'}}>{ran>0.5?'已回复':'未回复'}</Text> */}
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}
