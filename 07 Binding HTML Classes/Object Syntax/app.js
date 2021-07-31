const app = Vue.createApp({
    data() {
        return {
            isActive: true,
            error: null
        }
    },
    computed: {
        classObject() {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    }
});

app.mount("#app");