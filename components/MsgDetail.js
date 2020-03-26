import React, { Component } from 'react'
import {View,Text, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class MgsDetail extends Component {
    render() {
        return (
            <View>
                <Button title='返回msg页面' onPress={()=>Actions.pop()} />
                <Text>消息id:{this.props.id}</Text>
            </View>
        )
    }
}
