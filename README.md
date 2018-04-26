# ReactNativeNavigation

这是一个通过ReactNavigation实现导航效果的练习，包括StackNavigator、TabNavigator、DrawerNavigator，分别对应三个js文件

要运行项目首先安装依赖，在项目文件夹下cmd运行npm install

运行项目首先需要有react-native-cli
在安卓上运行项目，在文件夹下输入react-native run-android将程序安装到你的手机

通过在index.js中修改入口文件可以分别渲染三个导航组件，例如要渲染DrawerNavigator，将index.js中修改为
  import App from './DrawerNavigator'
