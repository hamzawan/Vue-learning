const app = Vue.createApp({
    data(){
        return {
            eventname:"click"
        }
    },
    methods: {
        doSomething() {
            alert("Hello World!")
        }
    }
});


app.mount("#app");