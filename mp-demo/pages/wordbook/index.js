Page({
  name: 'WordBook',

  data () {
    return {
      words: []
    }
  },
  mounted () {
    this.getWords()
  },
  methods: {
    getWords () {
      let words = localStorage.getItem('words')
      words = words === null ? [] : JSON.parse(words)

      this.words = words
    }
  }
})
