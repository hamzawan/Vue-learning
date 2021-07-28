const app = Vue.createApp({
    data() {
        return {
            searchText: "",
            searchText2: ""
        }
    }
});


// For this to actually work though, the <input> inside the component must:
//     (1) Bind the value attribute to the modelValue prop
//     (2) On input, emit an update:modelValue event with the new value
app.component('custom-input', {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    template: `
        <input 
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        >
    `
});


// Another way of implementing v-model with in component is to use computed properties 
// to define getter and setter. The get method should return the modelValue property
// and the set method should emit the corresponding event.


app.component('custom-input-2', {
    props: ['modelValue2'],
    emits: ['update:modelValue2'],
    template: `<input v-model="value">`,
    computed: {
        value: {
            get() {
                return this.modelValue2;
            },
            set(value) {
                this.$emit('update:modelValue2', value)
            }
        }
    }
})


app.mount("#custom-input-components");