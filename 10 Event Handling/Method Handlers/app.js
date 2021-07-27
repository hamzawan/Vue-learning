const app = Vue.createApp({
    methods: {
        say(message, $event) {
            console.log(message, $event)
        },
        greet(message){
            console.log(message);
        }
    }
});

app.mount("#app");