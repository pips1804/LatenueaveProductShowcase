<template>
  <section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Sidebar Categories (Desktop) -->
        <!-- <div class="hidden lg:block w-64 flex-shrink-0">
          <div
            class="bg-white dark:bg-brown-900 rounded-lg shadow-sm p-6 sticky top-6 transition-colors duration-300"
          >
            <h3
              class="text-lg font-semibold text-brown-900 dark:text-brown-100 mb-4"
            >
              Categories
            </h3>
            <div class="space-y-2">
              <button
                v-for="category in categories"
                :key="category"
                @click="$emit('update-category', category)"
                :class="[
                  'w-full text-left px-4 py-3 rounded-lg transition-colors',
                  selectedCategory === category
                    ? 'bg-brown-200 dark:bg-brown-800 text-brown-900 dark:text-brown-100 font-medium'
                    : 'text-brown-600 dark:text-brown-400 hover:bg-brown-100 dark:hover:bg-brown-800 hover:text-brown-800 dark:hover:text-brown-200',
                ]"
              >
                {{ category }}
              </button>
            </div>
          </div>
        </div> -->

        <!-- Products Grid -->
        <div class="flex-1">
          <div class="mb-6">
            <h3 class="text-2xl font-bold text-brown-900 dark:text-brown-100">
              {{ selectedCategory }}
            </h3>
            <p class="text-brown-600 dark:text-brown-400 mt-1">
              {{ products.length }} products
            </p>
          </div>

          <div
            v-if="products.length > 0"
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <ProductCard
              v-for="product in products"
              :key="product.id"
              :product="product"
              @view-product="$emit('view-product', $event)"
            />
          </div>

          <div
            v-else
            class="text-center text-brown-500 dark:text-brown-300 py-20 text-lg"
          >
            No products found.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  name: "ProductsSection",
  components: {
    ProductCard,
  },
  props: {
    categories: Array,
    selectedCategory: String,
    products: Array,
  },
  emits: ["update-category", "view-product"],
};
</script>
