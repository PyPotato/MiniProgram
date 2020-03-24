//注册小程序示例

//一般会做：1.判断小程序的进入场景（扫码/微信首页下拉/首页发现/小程序分享）
//         2.监听生命周期函数,在生命周期
//         3.App（）示例只有一个并且是全局共享的，可以设置全局变量

App({

  //生命周期函数：后台存活两小时（两小时内不会重新初始化）
  //初始化完成时执行
  onLaunch: function (options) {
    
    //异步调用->数据拿到之后再进行回调
    wx.getUserInfo({
      success:function(res){
        console.log(res)
      }
    })

  },

  //界面显示出来之后执行（可能多次执行）
  onShow: function (options) {
    console.log(options)
  },

  //小程序被关闭（隐藏）的时候被执行
  onHide: function () {
    
  },

  //小程序发生错误的时候执行
  onError: function (msg) {
    
  },

  //全局变量
  gloData:{
    name:'POTATO',
    age:18
  }
})
