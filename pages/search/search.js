Page({
  data: {
    current_id:'',//当前播放视频id
    videoList:[
      {id:"1","videoUrl":"http://47.243.23.29:8080/sicp2021over.mp4","poster":"http://47.243.23.29:8081/2021.jpg"},
      {id:"2","videoUrl":"http://47.243.23.29:8081/sicp2021video.mp4","poster":"http://47.243.23.29:8080/2020.jpg"},
      {id:"3","videoUrl":"http://47.243.23.29:8081/2019.mp4","poster":"http://47.243.23.29:8081/2019.jpg"},
      {id:"4","videoUrl":"http://47.243.23.29:8081/2018.mp4","poster":"http://47.243.23.29:8080/2018.jpg"}
    ]
  },
  onLoad: function (options) {

  },
  //视频列表点击事件
  videoPlay:function(e){
    console.log(e)
    var id= e.currentTarget.dataset.index
    var currentId=e.currentTarget.id
    //没有播放时播放视频
    if(!this.data.current_id){
      this.setData({
        current_id: currentId
      })
      var videoContext = wx.createVideoContext(id)
      videoContext.play()
      
    }else{//有播放时先将prev暂停，再播放当前点击的current
      if(this.data.current_id != currentId){
        var preVideoID='videoId'+this.data.current_id
        var videoContextPrev = wx.createVideoContext(preVideoID)
        videoContextPrev.pause()
      }
      this.setData({
        current_id: currentId
      })
      var videoContext = wx.createVideoContext(id)
      videoContext.play()
    }
  },handleSavedFileList(){
    //1.获取该小程序下已保存的本地缓存文件列表(小程序本地存储的文件列表)
    wx.getSavedFileList({
      success: function(res){
        console.log("getSavedFileList",res)
        //遍历小程序本地存储的文件列表
        res.fileList.forEach((val,key) =>{
          //2.删除存储的垃圾数据
          wx.removeSavedFile({
            filePath: val.filePath
          })
        })
      }
    })
  }

})