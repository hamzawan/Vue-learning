const app = Vue.createApp({
    // To add methods in components we use method Option. This should be an objects contains our desired methods
    methods: {
        doSomething(){
            alert("Okay did this");            
        }
    }
});

const vm = app.mount("#app");

