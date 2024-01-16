const app = Vue.createApp({
    data() {
        return {
            tujuanNyaA: 'Paham vue!!',
            tujuanNyaB: 'Bisa vue!!',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        tujuanAkhir() {
            const nomerAcak = Math.random();
            if (nomerAcak < 0.5) {
                return this.tujuanNyaA;
            } else {
                return this.tujuanNyaB;         
            }
        }
    }
},);

app.mount('#user-goal');