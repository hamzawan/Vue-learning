const app = Vue.createApp({});

app.component('alert-box', {
    // Just like HTML elements, it's often use to pass content to a component.
    template:
        `
    <div class="demo-alert-box">
        <strong>Error!</strong>
        <slot></slot>
    </div>
    `
});

app.mount('#slot-demo');