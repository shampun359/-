new Vue({
  el: '#gg',
  data: {
    title: ' текст  раздела 1',
  },
  methods: {
    changeTextOne() {
      this.title = 'текст  раздела 1'
    },
    changeTextTwo() {
      this.title = 'текст  раздела 2'
    },
    changeTextThree() {
      this.title = 'текст  раздела 3'
    }
  }
});

