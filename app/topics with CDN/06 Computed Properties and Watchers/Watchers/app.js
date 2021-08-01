const app = Vue.createApp({
    data() {
        return {
            answer: "",
            question: ""
        }
    },
    // Wacther can wacth any property like data, computed properties and props. and then it will execute when property change.
    // it can update the property value
    // it's behaviour is async
    // it can be use to make an HTTP request.
    watch: {
        question(newQuestion, oldQuestion) {
            if (newQuestion.indexOf('?') > -1) {
                this.answerQuestion();
            }
        }
    },
    methods: {
        answerQuestion() {
            this.answer = "Thinking...";
            axios
                .get('https://yesno.wtf/api')
                .then(response => {
                    this.answer = response.data.answer;
                }).catch(error => {
                    console.error(error);
                })
        }
    }
});

app.mount("#app");