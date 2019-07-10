import fetchJsonp from 'fetch-jsonp'

const URL_TMPL = 'http://fanyi.so.com/index/search?query=%s&eng=1&ignore_trans=0'
let handle

Page({
  name: 'Index',

  data () {
    return {
      nowWord: '',
      wordDesc: {},
      showTranslate: false
    }
  },
  async mounted () {
    handle = setInterval(() => {
      // this.nowWord = this.$refs.word.value.trim()
    }, 50)

    if (this.$route.query && this.$route.query.word) {
      this.nowWord = this.$route.query.word
      await this.getWordDesc()
      this.showTranslate = true
    }
    // 测试canvasAPI
    this.testCanvasApi()
  },
  beforeDestroy () {
    clearInterval(handle)
  },
  methods: {
    async input (e) {
      this.showTranslate = false
      if (e.code == 'Enter') {
        await this.getWordDesc()
        this.showTranslate = true
      }
    },

    async getWordDesc () {
      let desc = await fetchJsonp(URL_TMPL.replace(/%s/, this.nowWord))
      desc = await desc.json()
      console.log(desc, 111)
      this.wordDesc = desc.data
    },

    addWordBook () {
      let words = localStorage.getItem('words')
      words = words === null ? [] : JSON.parse(words)

      words.push(this.nowWord)

      localStorage.setItem('words', JSON.stringify(words))

      console.log('成功加入【' + this.nowWord + '】到单词本')
    },
    testCanvasApi () {
      var ctx = this.api.createCanvasContext('myCanvas')
      var grd = ctx.createLinearGradient(0, 0, 170, 0)
      grd.addColorStop(0, 'black')
      grd.addColorStop(1, 'white')
      ctx.setFillStyle(grd)
      ctx.fillRect(20, 20, 150, 100)
      ctx.draw()
    }
  }
})
