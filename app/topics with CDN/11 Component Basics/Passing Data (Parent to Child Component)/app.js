

const app = Vue.createApp({
    data() {
        //With an array of post in data
        return {
            posts: [
                { id: 1, title: "My Vue Learning" },
                { id: 2, title: "My journey with Vue" },
                { id: 3, title: "Why Vue is so fun" },
            ],
            postFontSize: 1
        }
    }
});


app.component('blog-post', {
    props: ['title'],
    // Child component can emit an event on itself by calling the built-in emit method,
    // passing the name of the event
    // We can pass second parameter to emit to pass the value
    template: `<h4>{{ title }}</h4>`
});

app.mount('#blog-post-component');