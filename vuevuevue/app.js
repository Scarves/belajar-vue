const app = Vue.createApp({
    data() {
        return {
            tujuanNya: 'Paham dan bisa vue!!',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        tujuanAkhir() {
            const nomerAcak = Math.random();
            if (nomerAcak < 0.5) {
                return 'Belajar Vue!';
            } else {
                return 'Jago Vue!';         
            }
        }
    }
},);

app.mount('#user-goal');