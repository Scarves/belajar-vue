const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  // only use computed if i want outputing something
  computed: {
    fullname() {
      console.log('Running');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Nurfazri'
    }
  },
  // only use methode if i want to recalculated
  methods: {
    outputFullName() {
      console.log('Running');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Nurfazri';
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = ''
    }
  }
});

app.mount('#events');
