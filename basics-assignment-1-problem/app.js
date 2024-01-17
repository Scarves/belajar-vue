    const app = Vue.createApp({
        data() {
            return {
                name: 'Alfi Nurfazri',
                umur: 26,
                gambar: 'https://images.unsplash.com/photo-1705112587579-e58ba5154e85?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            };
        },
        methods: {
            favNumber() {
                const nomerAcak = Math.random();
                if (nomerAcak < 0.5) {
                    return '0';
                } else {
                    return '1';         
                }
            },
            nomorTiga() {
                const umurSetelah = this.umur + 5;
                return umurSetelah;
            }
        }
    },);

    app.mount('#assignment');