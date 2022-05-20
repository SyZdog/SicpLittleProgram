// pages/mine/mine.js
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    buttonExist: false,
    buttonDie: false,
    canIUseGetUserProfile: false,
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    wx.getUserProfile({
      desc: '用于完善个人资料', 
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getImge: function() {
    this.setData({
      buttonExist: true
    })
  }
})