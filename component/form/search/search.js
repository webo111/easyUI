// component/form/search/search.js
let value = '';

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    icon: {
      type: String,
      value: ''
    },
    iconSize: {
      type: String,
      value: '36'
    },
    textSize: {
      type: String,
      value: '28'
    },
    placeholder: {
      type: String,
      value: '输入搜索内容',
      observer: function (newVal) {
        this.setData({
          mPlaceholder: newVal
        });
      }
    },
    buttonText: {
      type: String,
      value: '搜索',
      observer: function (newVal) {
        this.setData({
          mButtonText: newVal
        })
      }
    },
    bgColor: {
      type: String,
      value: '#F4F4F4'
    },
    radius: {
      type: String,
      value: '60'
    },
    color: {
      type: String,
      value: '#333'
    },
    buttonTextSize: {
      type: String,
      value: '30'
    },
    buttonColor: {
      type: String,
      value: '#333'
    },
    spacing: {
      type: String,
      value: '26'
    },
    width: {
      type: String,
      value: '460'
    }
  },

  externalClasses: ['cus-component'],

  /**
   * 组件的初始数据
   */
  data: {
    inputing: false,
    mPlaceholder: '输入搜索内容',
    mButtonText: '搜索',
    value: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {

    onInput: function (e) {
      if (e.detail.value != '' && !this.data.inputing) {
        this.setData({
          inputing: true
        });
      }
      if (e.detail.value == '') {
        this.setData({
          inputing: false
        });
      }
      const mButtonText = this.data.mButtonText;
      if (!(mButtonText != undefined && mButtonText != "")) {
        console.log('search搜索事件触发');
        console.log(e);
        this.triggerEvent('onsearch', e, { bubbles: true });
      }
      value = e.detail.value;
    },

    onButtonTap: function (e) {
      console.log('search搜索事件触发');
      console.log(e);
      if (value == '') {
        e.detail.value = this.data.mPlaceholder;
      } else {
        e.detail.value = value
      }
      this.triggerEvent('onsearch', e, { bubbles: true });
    },

    onCleanTap: function (e) {
      this.setData({
        value: ''
      })
    }
  }
})
