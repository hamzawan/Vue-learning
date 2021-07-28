const app = Vue.createApp({
    data() {
        return {
            posts: [
                { id: 1, title: "Im learning Vue" },
                { id: 2, title: "My Vue Journey" },
                { id: 3, title: "Why Vue is so Awesome!" },
            ],
            postFontSize: 1
        }
    },
    methods: {
        onEnlargeText(fontSize) {
            this.postFontSize += fontSize;
        }
    }
});


app.component('blog-post', {
    props: ['title'],
    emits: ['enlargeText'],
    // Child component can emit an event on itself by calling the built-in emit method,
    // passing the name of the event
    // We can pass second parameter to emit to pass the value
    template: `
    <h4>{{ title }}</h4>
    <button @click="$emit('enlargeText', 0.1)">increase size</button>
    `
});

app.mount("#blog-post-components");