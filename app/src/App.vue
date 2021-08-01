<template>
  <!-- To provide the content to named slot we need to use v-slot directive on a template name element,
        provide the name of the slot as v-slot's arguments
        Note that v-slot can only be added to a <template>
         -->
  <base-layout>
    <template v-slot:header>
      <h1>The Header</h1>
    </template>
    <template v-slot:default>
      <p>Content for site</p>
    </template>
    <template v-slot:footer>
      <h5>Footer content</h5>
    </template>
  </base-layout>

  <todo-list>
    <!-- attribute bound to a slot element are called slot props, in this case `slotProps` but we can use any name we like.-->
    <template v-slot:default="slotProp">
      <span class="green">
        {{ slotProp.item }}
      </span>
    </template>
  </todo-list>
</template>
  <script>
export default {};
</script>

<style scoped>
.green {
  color: green;
  font-size: 16px;
}
</style>