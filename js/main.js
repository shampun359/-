Vue.component('like', {
  data: function(){
    return {
      counter: 0
    }
  },
  template:'<button type="button" @click="counter++">&#128420;{{ counter }}</button>'
})

new Vue({
  el: '#app',
  data: {
    title: 'Vue!',
    task_sum: '228!',
    tasks: [
      {text:'Развернуть окружение в Codepen', done: false},
      {text:'Пройти курс по Vue', done: false},
      {text:'Сделать интернет-магазин на Vue', done: false}
    ],
  },
  methods: {
    push_task(){
      this.tasks.push({text: this.message, done: false}); 
      this.message='' ;
    },
    count(){
      return this.tasks.filter(task => !task.done).length;
    }
  }
})
