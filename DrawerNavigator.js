import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView
} from 'react-native';
import {DrawerNavigator,TabNavigator,StackNavigator,DrawerItems, SafeAreaView} from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  icon: {
    width: 24,
    height: 24,
  },
  userPic:{
    width:80,
    height:80,
    borderRadius:40,
    margin:20
  },
});

class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: '主页',                          //设置标签label文字
    drawerIcon: ({focused, tintColor}) => (       //设置标签的icon
      <Image
        source={{uri: 'mipmap/tabbar_home'}}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:30}}>这是主页</Text>
      </View>
    );
  }
}

class NotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: '信息',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={{uri:'mipmap/tabbar_message'}}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:30}}>这是消息页</Text>
      </View>
    );
  }
}

class CustomDrawer extends Component{
  constructor(props){
    super(props);                       //通过super传入上层调用的props
  }
  render(){
    return (
      <ScrollView>
        <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
          {/*自定义区域*/}
          <View style={{flex:1,alignItems:'center'}}>
            <Image source={{uri:'mipmap/user_icon'}} style={styles.userPic} />
          </View>
          <DrawerItems {...this.props} />
        </SafeAreaView>
      </ScrollView>
    );
  }
}

export default DrawerNavigator(
  {
    Home: {  screen: HomeScreen },
    Notifications: { screen: NotificationsScreen },
  },
  {
    drawerWidth:200,            //侧边栏的宽度
    drawerPosition:'right',     //定义侧边栏位置右边，默认left左边
    contentComponent:CustomDrawer,            //自定义侧边栏组件
    drawerBackgroundColor:'#c8eaff',          //侧边栏背景色
    contentOptions:{                          //对侧边栏中的标签详细设置如下👇
      activeTintColor:'#936eff',                 //标签激活时的前景色
      activeBackgroundColor:'#8fc3ff',           //标签激活时的背景色
      inactiveTintColor:'#598dff',               //标签未激活时的前景色
      inactiveBackgroundColor:'#c1e1ff',         //标签未激活时的背景色
      itemsContainerStyle:{                      //侧边栏整体样式
        borderTopWidth:2,borderTopColor:'#5153ff'
      },
      itemStyle:{                                //单个标签样式
        borderBottomWidth:2,borderBottomColor:'#41a6ff'
      },
      labelStyle:{                               //标签文字样式
        fontSize:16
      },
      iconContainerStyle:styles.icon,            //标签icon样式
    }
  }
);



