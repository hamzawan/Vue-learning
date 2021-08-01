<template>
  <div class="container">
    <!-- We can also used multiple slots in a single component with the special attribute, name in slot element 
         A <slot> outlet without name implicitly has the name "default". -->
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {};
</script>