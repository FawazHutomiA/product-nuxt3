<template>
  <div>
    <Navbar />
    <div class="body">
      <slot />
    </div>
  </div>
</template>

<script setup>
import LoadingSpinner from "@/components/Navbar.vue";
</script>

<style scoped lang="scss">
.body {
  margin: 20px 0;
}
</style>
