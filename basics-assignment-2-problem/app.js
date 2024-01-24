const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      outputDua: "",
      answerDua: "",
    };
  },
  methods: {
    taskSatu(text) {
      alert(text);
    },
    taskDua(event) {
      this.outputDua = event.target.value;
    },
    confirmInput() {
      this.answerDua = this.outputDua;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount("#assignment");
