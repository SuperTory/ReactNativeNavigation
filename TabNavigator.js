import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import {TabNavigator,StackNavigator} from 'react-navigation';

class HomeScreen extends Component{
  render (){
    return (
      <View style={styles.container}>
        <Text style={{fontSize:30}}>主页页面</Text>
        <Button title='转到详情'
                onPress={()=>{this.props.navigation.navigate('Detail')}}
        />
      </View>
    )
  }
}
class DetailScreen extends Component{
  static navigationOptions={
    title:'详情'
  };
  render (){
    return <View style={styles.container}><Text style={{fontSize:30}}>主页详情页</Text></View>
  }
}
function renderIcon(tab,component){
  let iconSrc='';
  if (tab.focused){                       //标签激活状态下icon的路径
    iconSrc=component+'_highlighted';
  }else{                                  //未激活状态下的icon
    iconSrc='tabbar_'+component;
  }
  console.log(iconSrc);
  return <Image source={{uri:'mipmap/'+iconSrc}} style={{width:30,height:30}} />
}
class MessageScreen extends Component{
  static navigationOptions={
    title:'消息',                          //设置通用标题
    //tabBarVisible:false,                  //隐藏标签栏，默认为true显示
    //swipeEnabled:true,                    //是否允许滑动切换标签页，默认接收TabNavigator中的设置
    tabBarIcon:(tab)=>renderIcon(tab,'message'),           //定义渲染Icon的方法
    //tabBarLabel:(tab)=>renderLabel(tab,'message'),         //定义渲染标签文字的方法，默认渲染title
    //tabBarOnPress:(obj)=>tapTab(obj)                          //标签被点击时触发的方法
  };
  render (){
    return <View style={styles.container}><Text  style={{fontSize:30}}>消息页面</Text></View>
  }
}


const HomeStack=StackNavigator(
  {
    Home:{screen:HomeScreen},
    Detail:{screen:DetailScreen}
  },
  {
    navigationOptions:{
      title:'主页',
      tabBarIcon:(tab)=>renderIcon(tab,'home'),
    }
  }
);

export default TabNavigator (
  {
    Home:{screen:HomeStack},       //标签页Home对应HomeScreen组件
    Message:{screen:MessageScreen}
  },
  {
    //tabBarComponent: TabBarBottom,        //自定义标签栏组件
    tabBarPosition: 'bottom',             //设置标签栏位置
    animationEnabled: true,               //开启标签页切换动画
    swipeEnabled: true,                   //允许标签页之间滑动切换
    initialRouteName:'Home',              //初始路由
    tabBarOptions:{                       //标签栏的设置
      style:{                               //整体标签栏样式设置
        backgroundColor:'#91d6ff',
      },
      // tabStyle:{                            //每个标签的样式
      //   width:150
      // },
      // labelStyle:{                          //标签文字样式
      //   fontSize:16
      // },
      // iconStyle:{                           //标签图标样式
      //   width:20,
      // },
      // activeTintColor:'blue',               //标签激活时的前景色
      // activeBackgroundColor:'white',        //标签激活时的背景色
      // inactiveTintColor:'white',            //标签未激活时的前景色
      // inactiveBackgroundColor:'blue',       //标签未激活时的背景色
      // pressColor:'#9dbbff',                 //标签被点击时的颜色（仅安卓）
      showLabel:false,                     //将文字标签隐藏，默认为true开启
      showIcon:true,                       //显示图标，默认为false隐藏
    }
  }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});