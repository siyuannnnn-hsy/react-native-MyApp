import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity,AsyncStorage} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils/index'

let rootUrl = "https://www.fastmock.site/mock/5f5b816cfc78f3ca6777ff6a27e2e1bd/api"
export default class Login extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            pwd:'',
            isloading:false
        }
    }
    userhandle = (text) => {
        this.setState({username:text})
    }
    pwdhandle = (text) => {
        this.setState({pwd:text})
    }
    login = () => {
        // myFetch.get('/topic',{limit:4})
        //     .then(res=>console.log(res))
        this.setState({isloading:true})
        myFetch.post('./login',{
                username:this.state.username,
                pwd:this.state.pwd
            }).then(res=>{
                //根据返回状态进行判断，正确时跳转首页
                // if(res){

                // }
                AsyncStorage.setItem('user',JSON.stringify(res.data))
                    .then(()=>{
                        this.setState({isloading:false})
                        Actions.lightbox();
                    })
            })
           
    }
  render() {
    return (
      <View style={{flex: 1,justifyContent: 'center'}}>
        <View
          style={{ alignItems: 'center'}}>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="user" color="red"/>
            <TextInput placeholder="用户名" 
                onChangeText={this.userhandle}
            />
          </View>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="user" color="red"/>
            <TextInput placeholder="密码" 
                secureTextEntry={true}
                onChangeText={this.pwdhandle}
            />
          </View>
            <TouchableOpacity 
                style={{
                    width: '80%',
                    height: 40,
                    backgroundColor: '#ccc',
                    marginTop: 30,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={this.login}>
                <Text>登录</Text>
            </TouchableOpacity>
        </View>
        {
            this.state.isloading?<View><Text>正在登录</Text></View>:null
        }
      </View>
    );
  }
}