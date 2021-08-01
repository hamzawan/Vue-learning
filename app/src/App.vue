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
</template>
  <script>
export default {};
</script>