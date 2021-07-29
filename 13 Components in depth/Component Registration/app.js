
/*================== GLOBAL REGISTRATION ==================*/

const componentA = {
    template: `<h2>Component A</h2>`,
};

const componentB = {
    template: `<h2>Component B</h2>`,
};


const app = Vue.createApp({});

// These components are Globally registered for the application. 
// That means they can be used in the template of any component
// isntance within this application
app.component('component-a', componentA);
app.component('component-b', componentB);

app.mount("#app")

/*================== GLOBAL REGISTRATION ==================*/

/*================== LOCAL REGISTRATION ==================*/

const componentC = {
    template: `<h2>Component C</h2>`,
};

const componentD = {
    template: `<h2>Component D</h2>`,
};

// These components are only avaliable in in the app2,
// locally registered components are not avaliable in subcomponents if
// we wanted component-c in component-d we also have to register that in component-d locally
const app2 = Vue.createApp({
    components: {
        'component-c': componentC,
        'component-d': componentD,
    },
});

/*================== LOCAL REGISTRATION ==================*/