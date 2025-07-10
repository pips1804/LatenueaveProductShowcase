<template>
  <div
    :class="{ dark: isDark }"
    class="min-h-screen transition-colors duration-300"
  >
    <div
      class="min-h-screen bg-brown-50 dark:bg-brown-950 transition-colors duration-300 pt-16"
    >
      <AppHeader
        :categories="categories"
        :selected-category="selectedCategory"
        :is-dark="isDark"
        @search="handleSearch"
        @update-category="selectedCategory = $event"
        @toggle-theme="toggleTheme"
      />

      <HeroSection @shop-now="selectedCategory = 'All Products'" />

      <ProductsSection
        :categories="categories"
        :selected-category="selectedCategory"
        :products="filteredProducts"
        @update-category="selectedCategory = $event"
        @view-product="viewProduct"
      />

      <AppFooter />

      <ProductModal
        :show="showModal"
        :product="selectedProduct"
        @close="closeModal"
      />
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import HeroSection from "./components/HeroSection.vue";
import ProductsSection from "./components/ProductsSection.vue";
import AppFooter from "./components/AppFooter.vue";
import ProductModal from "./components/ProductModal.vue";
import { useTheme } from "./composables/useTheme";
import { products } from "./data/products";

export default {
  name: "App",
  components: {
    AppHeader,
    HeroSection,
    ProductsSection,
    AppFooter,
    ProductModal,
  },
  setup() {
    const { isDark, toggleTheme } = useTheme();

    return {
      isDark,
      toggleTheme,
    };
  },
  data() {
    return {
      selectedCategory: "All Products",
      showModal: false,
      selectedProduct: null,
      categories: ["All Products", "Bags", "Dresses", "Shirts"],
      products,
      searchQuery: "", // ✅ Add this
    };
  },
  computed: {
    filteredProducts() {
      const filteredByCategory =
        this.selectedCategory === "All Products"
          ? this.products
          : this.products.filter(
              (product) => product.category === this.selectedCategory
            );

      if (!this.searchQuery.trim()) {
        return filteredByCategory;
      }

      return filteredByCategory.filter((product) =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    viewProduct(product) {
      this.selectedProduct = product;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedProduct = null;
    },
    handleSearch(query) {
      this.searchQuery = query; // ✅ Just update the query
    },
  },
};
</script>
