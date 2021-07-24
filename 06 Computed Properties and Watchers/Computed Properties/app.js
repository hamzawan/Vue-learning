const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            inputValue: '',
            firstName: '',
            lastName: 'Hamza',
            fullName: ''
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
        },
        getValue() {
            this.firstName = this.inputValue;
        },

        //This will execute every time when any property gets update
        checkfullName() {
            console.log("Running");
            if (this.firstName != '') {
                this.fullName = this.firstName + ' ' + this.lastName
            }
            else {
                this.fullName = '';
            }
            return this.fullName;
        }

    }
});

app.mount("#app");