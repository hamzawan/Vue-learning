<template>
  <ul>
    <li v-for="(item, idx) in items" :key="idx">
        <slot :item="item"></slot>
    </li>
  </ul>
</template>

<script>
export default {
    data(){
        return{
            items: ['Feed a cat', 'Buy milk']
        }
    }
}
</script>