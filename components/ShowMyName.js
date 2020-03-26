import React from 'react';
import {View,Text,Button} from 'react-native';
import { Actions } from 'react-native-router-flux';

const ShowMyName = (props) => {
    return (
        <View>
            <Text>hello {props.name}</Text>
            <Button title='返回' onPress={Actions.pop}/>
        </View>
    )
}
export default ShowMyName;