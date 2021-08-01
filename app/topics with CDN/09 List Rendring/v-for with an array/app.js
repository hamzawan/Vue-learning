const app = Vue.createApp({
    data() {
        return {
            parentProperty: "Parent",
            messages: [{ id: 1, message: "Hello there" }, { id: 2, message: "How are you?" }, { id: 3, message: "How are you?" }]
        }
    }
});

app.mount("#app");