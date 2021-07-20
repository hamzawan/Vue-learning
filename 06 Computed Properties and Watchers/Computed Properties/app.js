const app = Vue.createApp({
    data() {
        return {
            counter: 0
        }
    },

    /** 
     *Computer Properties
        (i) In-template we can write JS expression, but putting to much logic in template is a bad practice and can make the code
        hard to maintain, so we can write that logic in computed properties and then we can refrence that computed property in template.
        (ii) Computed property should return something.
        (iii) Computed property VS Methods: 
                computed properties are cached based on their reactive dependencies, means it will only re-evaluate when the counter value
                gets updated, but function will run every time.

    */
    computed: {
        checkCounter() {
            return this.counter >= 0 ? "Counter is positive" : "Counter is negative";
        }
    },
    methods: {
        incrementCount() {
            this.counter += 1;
        },
        decrementCount() {
            this.counter -= 1;
        }
    }
});

app.mount("#app");