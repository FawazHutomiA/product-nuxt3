<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Logo -->
      <div class="navbar-logo">
        <NuxtLink to="/">Product Catalog</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  background-color: #3498db;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;

  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navbar-logo {
    a {
      color: #fff;
      font-size: 1.5rem;
      font-weight: bold;
      text-decoration: none;
    }
  }

  @media (max-width: 768px) {
    .navbar-links {
      display: none;
    }
  }
}
</style>
