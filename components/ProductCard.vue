<template>
  <div class="product-card">
    <NuxtLink :to="`/product/${product.id}`">
      <img :src="product.products[0].image" class="product-image" />
    </NuxtLink>
    <div class="product-info">
      <h2 class="product-name">{{ product.name }}</h2>
      <p class="product-price">Rp. {{ formatPrice(product.price) }}</p>
      <p>{{ truncateDescription(product.description, 100) }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const formatPrice = (price) => {
  return new Intl.NumberFormat("id-ID").format(price);
};

// Fungsi untuk membatasi panjang deskripsi
const truncateDescription = (description, maxLength) => {
  return description.length > maxLength
    ? description.slice(0, maxLength) + "..."
    : description;
};
</script>

<style scoped lang="scss">
.product-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  width: 320px;
  overflow: hidden;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .product-info {
    margin: 20px;

    .product-name {
      font-size: 1.25rem;
      color: #333;
    }

    .product-price {
      font-size: 1.1rem;
      color: #3498db;
    }
  }

  .product-image {
    width: 100%;
    height: 20rem;
    object-fit: cover;
  }
}
</style>
