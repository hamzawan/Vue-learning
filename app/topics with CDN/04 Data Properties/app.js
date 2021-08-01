const app = Vue.createApp({
    /** The data option for a component is a function. Vue calls this function as part of create a new instance
     it should return an object , which vue will wrap that in it's reactivity system and store and store
     on the component instance as $data. 
     */
    data() {
        return {
            value: 123
        }
    }
});

const vm = app.mount("#app");

console.log(vm.value); // => 123

console.log(vm.$data.value); // => 123

// Assigning a value to vm.value also update the value of vm.$data.value and vice versa

vm.value = 456;

console.log("vm.value", vm.value);
console.log("vm.$data.value", vm.$data.value);