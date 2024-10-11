<template>
  <div class="product-card">
    <NuxtLink :to="`/product/${product.id}`">
      <img :src="product.products[0].image" class="product-image" />
    </NuxtLink>
    <div class="product-info">
      <swiper :space-between="10"  :slides-per-view="2" :loop="true" pagination>
        <swiper-slide
          v-for="(tag, index) in product.tags"
          :key="index"
          class="tag-slide"
        >
          <div>
            {{ tag }}
          </div>
        </swiper-slide>
      </swiper>
      <h2 class="product-name">{{ product.name }}</h2>
      <p class="product-price">Rp. {{ formatPrice(product.price) }}</p>
      <p>{{ truncateDescription(product.description, 100) }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import "swiper/css";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const formatPrice = (price) => {
  return new Intl.NumberFormat("id-ID").format(price);
};

// Function to truncate the description
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
  width: 280px;
  overflow: hidden;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .product-info {
    margin: 20px;

    .tag-slide {
      background-color: #3498db;
      color: #fff;
      padding: 8px 4px;
      border-radius: 5px;
      display: flex;
      justify-content: center;
    }

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
