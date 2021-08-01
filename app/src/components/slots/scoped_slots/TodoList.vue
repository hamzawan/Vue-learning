  <!-- Sometimes, it's useful for slots to access data only avaliable in the child component.
     it's a common case when a compoent is used to render an array of items, and we want to customize the way
     each item is rendered -->

     <!-- to make item avalibe in a parent we can add a slot element and bind it as an attribute in this case `item` is bind-->
<template>
  <ul>
    <li v-for="(item, idx) in items" :key="idx">
      <slot :item="item"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      items: ["Feed a cat", "Buy milk"],
    };
  },
};
</script>