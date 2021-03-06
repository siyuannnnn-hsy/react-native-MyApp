import React, { Component } from 'react'
import { Text, View, PermissionsAndroid } from 'react-native'
import Desc from './Desc';

// 类型断言：可以确定地指定一个值的类型
// 形式：
// <Type>值 在jsx中不能用
// 值 as 类型
// interface Person{
//     name:string;
//     age:number;
// }
// let user1:Person = { name:'a',age:20 }
// let user1 = {} as Person;
// user1.name = 'liu';
// user1.age = 18;

//联合类型 或者 any类型
// function getLength(p1:string|number):number{
//     return (p1 as string).length
// }

// 类定义
// 用ES5方式：创建一个Person类，有name和age属性，调用的时候转入
// class Person{
//     name:string;
//     age:number;
//     constructor(name:string,age:number){
//         this.age = age;
//         this.name = name;
//     }
//     sayName(){

//     }
// }
// class Worker extends Person{
    // 访问修饰符 静态属性 static 私有private 受保护protected
//     static money:number;
//     private job:string;
//     constructor(name:string,age:number,job:string){
//         super(name,age);
//         this.job = job
//     }
// }
// Worker.money = 1000;
// let user = new Worker('zang',18,'程序员');
// console.log(user)

// 泛型
// function identity<T>(arg: T): T {
//     return arg;
// }
// console.log(identity<string>('params1'))
//泛型函数
// function getMsg<T>(msg:T):Array<T>{
//     return [msg];
// }
// console.log(getMsg<number>(100))
//泛型接口
// interface GenericIdentityFn<T> {
//     (arg: T): T;
// }
// let myIdentity: GenericIdentityFn<number> = function(arg){
//     return 100;
// };
// console.log(myIdentity(100))

interface Props{
    name:string;
    data:{
        id:string,
        title:string
    }
}
interface State{
    title:string
}
export default class Demo1 extends Component<Props,State> {
    constructor(props:Props){
        super(props);
        this.state={
            title:'typescript'
        }
    }
    componentDidMount(){
        this.setState({title:'100'})
    }
    render() {
        return (
            <View>
                <Text> {this.props.name}</Text>
                <Text>{this.props.data.id}</Text>
                <Desc />
            </View>
        )
    }
}
