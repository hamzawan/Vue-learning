const app = Vue.createApp({
    data() {
        return {
            msg: "95",
            rawHtml: "<span style='background-color:red;'>background color is red</span>"
        }
    }
});

app.mount("#app")