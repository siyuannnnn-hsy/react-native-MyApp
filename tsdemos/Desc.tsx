import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'

// 普通装饰器（无参数） 其实就是一个函数 在函数里可以写一些新的逻辑
// 包裹后面修饰的内容，将新的逻辑传递到被修饰的内容中去
// 高阶组件--其实就是一个函数，就是装饰器
// @expr 语法其实就是语法糖
// function helloWord(target: any) {
//     console.log('hello Word!');
// }
// @helloWord
// class HelloWordClass {
//     sayHello(){

//     }
// }
//定义
// function addUrl(target:any){
//     target.prototype.url = 'https://'
// }
// @addUrl
// class HomeServer{
//     url:any;
//     getData(){
//         console.log(this.url)
//     }
// }
// let home = new HomeServer();
// home.getData()
class UserServer{
    getInfor(){

    }
}
//带参数装饰器(装饰器工厂)
// function addUrl(url:string){
//     return function(target:any){//这才是装饰器
//         target.prototype.url = url
//     }
// }
// @addUrl('http://www.baidu.com')
// class HomeServer{
//     url:string|undefined;
//     getData(){
//         console.log(this.url)
//     }
// }
// let home = new HomeServer();
// home.getData()

//类装饰器
// function setStatusBar(color:string){
//     return function(WrapComponent:any){
//         return class extends Component{
//             render(){
//                 return (
//                     <>
//                         {/* <StatusBar /> */}
//                         <View style={{height:30,backgroundColor:'red'}}></View>
//                         <WrapComponent />
//                     </>
//                 )
//             }
//         }
//     }
// }
// @setStatusBar('red')

//方法装饰器
// function enumerable(value: boolean) {
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         target.name = 'liu'
//         console.log(descriptor)
//         descriptor.enumerable = value;
//     };
// }
// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }

//     @enumerable(false)
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }
// console.log(new Greeter('world').name)

function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        target.name = 'liu'
        console.log(descriptor)
        descriptor.enumerable = value;
    };
}
function log(target:any,methodName:string,des:PropertyDescriptor){
    var oldVal = des.value;
    des.value = function(){
        console.log(methodName + '被调用')
        return oldVal.apply(this);
    }
}
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(false)
    @log
    greet(msg:string) {
        return "Hello, " + this.greeting + 'msg';
    }
}
let msg = new Greeter('world').greet('greet 参数')
console.log(msg)

export default class Desc extends Component {
    render() {
        return (
            <View>
                <StatusBar backgroundColor='red' />
                <Text> Desc</Text>
            </View>
        )
    }
}
