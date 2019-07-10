
App({
  data: () => ({ n: 0 }),
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
