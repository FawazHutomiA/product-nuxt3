<template>
  <div>
    <div v-if="isLoading" class="loader">
      <LoadingSpinner />
      <h3>Loading...</h3>
    </div>

    <div v-if="product && !isLoading" class="container">
      <!-- description -->
      <div class="product-image">
        <img :src="selectedImage" alt="Product Image" />
      </div>
      <!-- image -->
      <div class="product-details">
        <h1>{{ product.name }}</h1>
        <p class="product-price">Rp. {{ formatPrice(product.price) }}</p>
        <h2>Variant: Color - Please select color you want</h2>
        <div class="product-variant">
          <div
            v-for="item in product.products"
            :key="item.id"
            class="sub-product-variant"
            :style="{ backgroundColor: item.color }"
            @click="selectImage(item.id)"
          ></div>
        </div>
        <p class="product-description">{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from "@/store/products";
import { onMounted } from "vue";

const store = useProductsStore();
const route = useRoute();
const isLoading = ref(true);
const selectedImage = ref("");

onMounted(async () => {
  const productId = route.params.id;
  try {
    await store.fetchProductById(productId);
    selectedImage.value = store.selectedProduct.products[0].image;
  } finally {
    isLoading.value = false;
  }
});

const formatPrice = (price) => {
  return new Intl.NumberFormat("id-ID").format(price);
};

const selectImage = (productId) => {
  const selectedProduct = store.selectedProduct.products.find(
    (product) => product.id === productId
  );
  if (selectedProduct) {
    selectedImage.value = selectedProduct.image;
  }
};

const product = computed(() => store.getProductDetail);
</script>

<style scoped lang="scss">
h3 {
  text-align: center;
}

.loader {
  margin-top: 100px;
}

.container {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 20px;
  padding: 20px;

  .product-image {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 12px 15px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    overflow: hidden;
    width: 26rem;
    height: 30rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .product-details {
    flex: 1;

    h1 {
      font-size: 2.2rem;
    }

    h2 {
      font-size: 1.2rem;
    }

    p {
      font-size: 1.2rem;
    }

    .product-description {
      font-size: 1rem;
      margin-top: 40px;
    }

    .product-price {
      color: #3498db;
      font-size: 1.8rem;
    }

    .product-variant {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;

      .sub-product-variant {
        border: 0 solid #ddd;
        border-radius: 100%;
        box-shadow: 0 12px 15px rgba(0, 0, 0, 0.1);
        transition: box-shadow 0.3s ease;
        overflow: hidden;
        cursor: pointer;
        width: 2rem;
        height: 2rem;
      }
    }
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    padding: 20px;

    .product-image {
      width: 100%;
      height: 30rem;
      margin: 0 auto 20px;
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.2rem;
    }

    p {
      font-size: 1.2rem;
    }

    .product-price {
      font-size: 1.5rem;
    }

    .sub-product-variant {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
}

@media (max-width: 480px) {
  .container {
    margin: 10px;
    padding: 20px;

    .product-image {
      width: 100%;
      height: 25rem;
    }

    h1 {
      font-size: 1.8rem;
    }

    h2 {
      font-size: 1rem;
    }

    p {
      font-size: 1rem;
    }

    .product-price {
      font-size: 1.2rem;
    }

    .sub-product-variant {
      width: 2rem;
      height: 2rem;
    }
  }
}
</style>
