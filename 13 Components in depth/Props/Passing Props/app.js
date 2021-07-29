const blogPost = {
    template: `
    <h5>{{title}}</h5>
    <p>{{content}}</p>
    <p>{{likes}}</p>
    <p>{{isPublished}}</p>
    <p>{{commentsId}}</p>
    <p>{{author}}</p>
    `,
    // getting props that passed from parent app
    props: ['title', 'content', 'likes', 'isPublished', 'commentsId', 'author']
}

const app = Vue.createApp({
    data() {
        return {
            post: {
                title: "My First Blog Post",
                content: "Very awesome content",
                likes: 56,
                isPublished: true,
            }
        }
    }
});

app.component('blog-post', blogPost);

app.mount('#app');