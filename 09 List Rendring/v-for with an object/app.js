const app = Vue.createApp({
    data() {
        return {
            books: {
                id: 1,
                title: "Who did this",
                author: "Ameer Hamza",
                publishdDate: "2020/12/15"
            }
        }
    }
});

app.mount("#app");