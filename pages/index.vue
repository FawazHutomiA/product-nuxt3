<template>
  <div>
    <!-- Loading Spinner -->
    <div v-if="isLoading">
      <LoadingSpinner />
      <h3>Wait for product list</h3>
    </div>

    <!-- Product List -->
    <div v-if="!isLoading" class="product-list">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from "@/store/products";
import ProductCard from "@/components/ProductCard.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

const store = useProductsStore();
const isLoading = ref(true);

onMounted(async () => {
  try {
    await store.fetchProducts();
  } finally {
    isLoading.value = false;
  }
});

const products = computed(() => store.allProducts);
</script>

<style scoped lang="scss">
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
}

h3 {
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
}
</style>
