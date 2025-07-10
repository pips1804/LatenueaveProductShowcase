<template>
  <div class="min-h-screen bg-stone-50">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b border-stone-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <h1 class="text-2xl font-bold text-stone-800">Latenue.ave</h1>
          </div>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex space-x-8">
            <button
              v-for="category in categories"
              :key="category"
              @click="selectedCategory = category"
              :class="[
                'px-3 py-2 text-sm font-medium transition-colors',
                selectedCategory === category
                  ? 'text-amber-800 border-b-2 border-amber-800'
                  : 'text-stone-600 hover:text-stone-800',
              ]"
            >
              {{ category }}
            </button>
          </nav>

          <!-- Mobile menu button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 rounded-md text-stone-600 hover:text-stone-800"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <div
          v-if="mobileMenuOpen"
          class="md:hidden py-4 border-t border-stone-200"
        >
          <div class="flex flex-col space-y-2">
            <button
              v-for="category in categories"
              :key="category"
              @click="
                selectedCategory = category;
                mobileMenuOpen = false;
              "
              :class="[
                'px-3 py-2 text-left text-sm font-medium transition-colors',
                selectedCategory === category
                  ? 'text-amber-800 bg-amber-50'
                  : 'text-stone-600 hover:text-stone-800',
              ]"
            >
              {{ category }}
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-amber-50 to-stone-100 py-16 lg:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-4xl lg:text-6xl font-bold text-stone-800 mb-6">
            Discover your personal style
          </h2>
          <p class="text-xl text-stone-600 mb-8 max-w-2xl mx-auto">
            Explore our curated collection of premium clothing that reflects
            your unique personality and style.
          </p>
          <button
            @click="selectedCategory = 'All Products'"
            class="bg-stone-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-stone-700 transition-colors"
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>

    <!-- Products Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Sidebar Categories (Desktop) -->
          <div class="hidden lg:block w-64 flex-shrink-0">
            <div class="bg-white rounded-lg shadow-sm p-6 sticky top-6">
              <h3 class="text-lg font-semibold text-stone-800 mb-4">
                Categories
              </h3>
              <div class="space-y-2">
                <button
                  v-for="category in categories"
                  :key="category"
                  @click="selectedCategory = category"
                  :class="[
                    'w-full text-left px-4 py-3 rounded-lg transition-colors',
                    selectedCategory === category
                      ? 'bg-amber-100 text-amber-800 font-medium'
                      : 'text-stone-600 hover:bg-stone-50 hover:text-stone-800',
                  ]"
                >
                  {{ category }}
                </button>
              </div>
            </div>
          </div>

          <!-- Products Grid -->
          <div class="flex-1">
            <div class="mb-6">
              <h3 class="text-2xl font-bold text-stone-800">
                {{ selectedCategory }}
              </h3>
              <p class="text-stone-600 mt-1">
                {{ filteredProducts.length }} products
              </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                v-for="product in filteredProducts"
                :key="product.id"
                class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
              >
                <div
                  class="aspect-square bg-stone-100 relative overflow-hidden"
                >
                  <img
                    :src="product.image"
                    :alt="product.name"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div class="absolute top-4 right-4">
                    <button
                      class="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                    >
                      <svg
                        class="h-5 w-5 text-stone-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="p-4">
                  <h4 class="font-semibold text-stone-800 mb-1">
                    {{ product.name }}
                  </h4>
                  <p class="text-stone-600 text-sm mb-2">
                    {{ product.description }}
                  </p>
                  <div class="flex items-center justify-between">
                    <span class="text-lg font-bold text-stone-800"
                      >${{ product.price }}</span
                    >
                    <button
                      @click="viewProduct(product)"
                      class="bg-stone-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-stone-700 transition-colors"
                    >
                      View Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-stone-800 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="col-span-1 md:col-span-2">
            <h3 class="text-2xl font-bold mb-4">Latenue.ave</h3>
            <p class="text-stone-300 mb-6 max-w-md">
              Discover your personal style with our premium clothing collection.
              Quality, comfort, and style in every piece.
            </p>
            <div class="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                class="bg-stone-700 p-3 rounded-lg hover:bg-stone-600 transition-colors"
              >
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                class="bg-stone-700 p-3 rounded-lg hover:bg-stone-600 transition-colors"
              >
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 class="font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2 text-stone-300">
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >About Us</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >Contact</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >Size Guide</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >Shipping Info</a
                >
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold mb-4">Customer Care</h4>
            <ul class="space-y-2 text-stone-300">
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >Returns</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >Privacy Policy</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >Terms of Service</a
                >
              </li>
            </ul>
          </div>
        </div>

        <div
          class="border-t border-stone-700 mt-8 pt-8 text-center text-stone-400"
        >
          <p>&copy; 2024 Latenue.ave. All rights reserved.</p>
        </div>
      </div>
    </footer>

    <!-- Product Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      @click="closeModal"
    >
      <div class="bg-white rounded-lg max-w-md w-full p-6 relative" @click.stop>
        <button
          @click="closeModal"
          class="absolute top-4 right-4 text-stone-400 hover:text-stone-600"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div v-if="selectedProduct">
          <div
            class="aspect-square bg-stone-100 rounded-lg mb-4 overflow-hidden"
          >
            <img
              :src="selectedProduct.image"
              :alt="selectedProduct.name"
              class="w-full h-full object-cover"
            />
          </div>

          <h3 class="text-xl font-bold text-stone-800 mb-2">
            {{ selectedProduct.name }}
          </h3>
          <p class="text-stone-600 mb-4">{{ selectedProduct.description }}</p>
          <div class="text-2xl font-bold text-stone-800 mb-6">
            ${{ selectedProduct.price }}
          </div>

          <div class="space-y-3">
            <p class="text-sm text-stone-600 font-medium">Shop this item on:</p>
            <div class="flex space-x-3">
              <a
                href="https://facebook.com/shop"
                target="_blank"
                class="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex-1 justify-center"
              >
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
                <span class="text-sm font-medium">Facebook Shop</span>
              </a>
              <a
                href="https://tiktok.com/shop"
                target="_blank"
                class="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex-1 justify-center"
              >
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"
                  />
                </svg>
                <span class="text-sm font-medium">TikTok Shop</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LatenuaveShowcase",
  data() {
    return {
      selectedCategory: "All Products",
      mobileMenuOpen: false,
      showModal: false,
      selectedProduct: null,
      categories: ["All Products", "Bags", "Dresses", "Skirts", "Shirts"],
    };
  },
  computed: {
    filteredProducts() {
      if (this.selectedCategory === "All Products") {
        return this.products;
      }
      return this.products.filter(
        (product) => product.category === this.selectedCategory
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
  },
};
</script>

<style scoped>
/* Additional custom styles if needed */
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}
</style>
