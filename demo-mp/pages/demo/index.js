Page({
  data: () => ({ n: 0 }),
  methods: {
    // 组件与api通信机制测试
    testCommunicationOfComponentAndApi () {
      // Seapp.prototype.$toast = function () {
      this.$sysComponents.push({ render: h => h('div', 'hello world!') })
      // }
    }
  },
  onLoad () {
    console.log('app.main.js: onLoad~~~')
  },
  onReady () {
    console.log('app.main.js: onReady~~~')
  },
  onUnload () {
    console.log('app.main.js: onUnload~~~')
  },
  onShow () {
    console.log('app.main.js: onShow~~~')
  },
  onHide () {
    console.log('app.main.js: onHide~~~')
  }
})
