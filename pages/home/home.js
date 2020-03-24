// pages/home/home.js

const app=getApp()
console.log(app.gloData.name)


Page({
  //------------2.初始化数据------------------
  data: {
    name: 'PyPOTATO',
    age: 18,
    students: [{
        id: 1,
        name: 'james',
        age: 35
      },
      {
        id: 2,
        name: 'curry',
        age: 30
      },
      {
        id: 3,
        name: 'duke',
        age: 28
      },
      {
        id: 4,
        name: 'POTATO',
        age: 20
      }
    ],
    counter: 0
  },


  //-------------------3.监听wxml中的时间，绑定对应的事件函数--------------------
  BtnClick() {
    //错误做法：界面不会刷新
    //this.data.counter++;

    //this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
  },

  BtnSubtraction() {
    this.setData({
      counter: this.data.counter - 1
    })
  },

  handleGetUserInfo(event) {
    console.log(event)
  },

  handleViewClick(){
    console.log('Hello PyPOTATO!被点击了')
  },

  handleTextClick(){
    console.log('Text被点击了')
  },

  //-------------1.监听页面生命周期函数(发送网络请求，从服务器获取数据)-----------------
  onLoad() {
    console.log('onLoad')

  },
  //页面  初次  渲染完成
  onReady() {
    console.log('onReady')
  },
  onShow() {
    console.log('onshow')
  },
  onHide() {
    console.log('onHide')
  },
  onUnload() {
    console.log('onUnload')
  },


  //----------------4.监听其他事件-----------------
  //监听页面滚动
  onPageScroll(obj){
    //console.log(obj)
  },
  //监听页面滚动到底部
  onReachBottom(){
    console.log('页面滚动到底部')
  },
  //监听下拉刷新
  onPullDownRefresh(){
    console.log('下拉刷新')
  }



})



//编程范式：
//命令式编程
//声明式编程 