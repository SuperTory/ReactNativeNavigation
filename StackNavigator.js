/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {StackNavigator} from 'react-navigation'



class HomeScreen extends Component {
  static navigationOptions={
    title:'主页'
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:30}}>主页页面</Text>
        <Button title='跳转到详情'
                onPress={()=>this.props.navigation.navigate('Details',{
                  userName:'Tory',
                  userInfo:'Hello',
                  title:'详情页'
                })}
        />
      </View>
    );
  }
}

// static navigationOptions={
//   title:'详情页',
//   header:HeaderComponent,                       //自定义头部组件
//   headerTitle:TitleComponent,                   //自定义标题组件
//   headerLeft:LeftComponent,                     //自定义左边组件，会替换掉默认返回按钮
//   headerRight:<Text>右边元素</Text>,            //自定义右边元素，注意这里不可以放组件
//   headerBackImage:{uri:'mipmap/ic_launcher'},   //自定义返回按钮的图片
//   headerStyle:{                                 //导航栏样式设置
//     backgroundColor:'#8bc9ff',
//   },
//   headerTintColor:'#fff',                       //按钮、标题颜色设置
//   headerTitleStyle:{                            //标题字体样式设置
//     fontWeight:'bold',
//   },
//   headerTransparent:true,                      //使头部背景透明
//   gesturesEnabled:true,                        //开启手势操作
//   gestureDirection:'inverted',            //修改返回手势操作方向为从右到左，默认为从左到右
//   gestureResponseDistance:{               //定义手势响应距离屏幕边界的距离
//     horizontal:100,
//     vertical:50
//   }
// };

class DetailsScreen extends React.Component {
  state={count:0};
  static navigationOptions = (props) => {
    const params = props.navigation.state.params;
    return {
      title:'详情页',
      headerRight: (                        //通过params为按钮绑定increase方法
        <Button onPress={params.increase} title="+1" />
      ),
    };
  };

  componentWillMount() {                    //通过setParams将increase方法绑定到_increase
    this.props.navigation.setParams({ increase: this._increase });
  }
  _increase=()=>{                           //设置state.count+1
    this.setState(preState=>{return {count:preState.count+1}});
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:30}}>计数为：{this.state.count}</Text>
        <Button title='跳转Modal页'
                onPress={()=>this.props.navigation.navigate('Modal')}
        />
      </View>
    );
  }
}

class ModalScreen extends Component {
  static navigationOptions={
    title:'Modal页'
  };
  render() {
    return (
      <View style={styles.container}>
        <Text  style={{fontSize:30}}>Modal页页面</Text>
      </View>
    );
  }
}

const MainStack = StackNavigator(   //二级路由
  {
    Home: { screen: HomeScreen },
    Details: {screen: DetailsScreen },
  },
  {
    headerMode:'none',            //隐藏二级路由的头部
  }
);

const RootStack = StackNavigator(   //根路由
  {
    Main: { screen: MainStack  },    //将StackNavigator作为组件
    Modal: { screen: ModalScreen },
  },
);

export default class App extends Component {
  render() {                            //将Navigation作为根路径导出
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
