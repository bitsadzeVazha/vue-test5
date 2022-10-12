const app = Vue.createApp({
    data(){
        return {
            list: [],
            input: "",
            showList: true
        }
    },
    methods: {
        add(){
            this.list.push(this.input);
            this.input = "";
        },
        switchList(){
            this.showList = !this.showList;
        }
    }
})

app.mount("#assignment");