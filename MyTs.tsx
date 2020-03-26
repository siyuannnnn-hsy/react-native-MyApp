import React, { Component } from 'react'
import {Text,View} from 'react-native'
import Demo01 from './tsdemos/Demo01';

//声明变量
const str = 'abc'
let num:number = 100;

// let arr:Array<string> = ['1','2','3']
let arr:string[] = ['1','2']

// let obj:object = {name:'zhangsan'}
let obj:{name:string} = {name:'zhangsan'}

//Tuple(元组)
let tupleArr:[string,number,boolean] = ['aaa',2,true]

//enum(枚举)
enum Lev {one=100,two=200,three};
let myLev:Lev = Lev.two;
console.log(myLev)

//any 任意类型
let a:any = 'any type'

//interface ：描述一个对象的取值规范
//属性接口
interface Course{
    title:string,
    intro:string,
    num?:number,
    [propName:string]:any
}
let hybird :Course = {
    title:'hybird',
    intro:'混合应用开发',
    name:'zhangsan'
}

//普通函数声明 不能多次利用
function fun1(pa1:string,pa2:number):boolean{
    return true;
}

//函数接口
interface MyFunc{
    (params1:string):boolean
}
let fun:MyFunc = function(pa:string){
    return true;
}

//类接口
interface Person{
    name:string,
    age:number
}
//继承(extends) 接口继承接口 
interface User extends Person{
    pwd:string
}
class User1 implements User{
    name = 'zhangsan';
    age = 20;
    pwd = '123456';
}
console.log(new User1);
//接口也可以继承类(类不能继承接口 类是实现接口)
interface User2 extends User1{
    work:string
}
// let user:User2 = {}

interface Props{
    name:string
}


export default class MyTs extends Component<Props> {
    render() {
        return (
            <Demo01 name={'zhangsan'} data={{id:'11',title:'22'}}/>
        //    <View>
        //        <Text style={{fontSize:20}}>
        //            {arr}{obj.name}
        //         </Text>
        //    </View>
        )
    }
}
