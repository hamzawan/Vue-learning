const app = Vue.createApp({
    methods: {
        submitForm() {
            alert("Form Submitted without refreshing page")
        }
    }
});

app.mount("#app");