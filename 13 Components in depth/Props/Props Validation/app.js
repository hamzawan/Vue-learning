const myComponent = {
    props: {
        // Basic type check (`null` and `undefined` will be pass any type validation )
        propA: Number,
        // Multiple Possible type
        propB: [String, Number],
        // Required string
        propC: {
            type: String,
            required: true,
        },
        // Number with a default value
        propD: {
            type: Number,
            default: 100,
        },
        // Object with a default value
        propE: {
            type: Object,
            // Object or array defaults must be returned from a factory function
            default() {
                return { message: 'default message' }
            },
        },
        // Custom validator function
        propF: {
            validator(value) {
                // The value must match one of these string
                return ['apple', 'banana', 'orange', 'strawberry'].includes(value);
            }
        },
        // Custom validator function
        propG: {
            type: Function,
            // Unlike object or array default, this is not a factory function - this is a function to serve as a default value
            default() {
                return 'Default Function'
            }
        }
    }
};