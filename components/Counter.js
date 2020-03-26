import React,{Component,useState} from 'react';
import {View,Text,Button} from 'react-native';

//函数写法
const Counter = () => {
    let [num,setNum] = useState(0);
    return (
        <View>
            <Text>{num}</Text>
            <Button onPress={()=>{setNum(num+1)}} title='点击+1'/>
        </View>
    )
}
export default Counter;

// export default class Counter extends Component {
//     constructor(){
//         super();
//         this.state={
//             num:0
//         }
//     }
//     handle=()=>{
//         this.setState((state)=>{
//             return{
//                 num:++state.num
//             }
//         }
//     )}
//     render(){
//         return (
//             <View>
//                 <Text>{this.state.num}</Text>
//                 <Button onPress={this.handle} title='+1'/>
//             </View>
//         )
//     }
// }