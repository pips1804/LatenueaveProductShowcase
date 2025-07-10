<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    @click="$emit('close')"
  >
    <div
      class="bg-white dark:bg-brown-900 rounded-lg max-w-md w-full p-6 relative transition-colors duration-300"
      @click.stop
    >
      <button
        @click="$emit('close')"
        class="absolute top-4 right-4 text-brown-500 dark:text-brown-400 hover:text-brown-700 dark:hover:text-brown-200"
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

      <div v-if="product">
        <div
          class="aspect-square bg-brown-100 dark:bg-brown-800 rounded-lg mb-4 overflow-hidden"
        >
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full h-full object-cover"
          />
        </div>

        <h3 class="text-xl font-bold text-brown-900 dark:text-brown-100 mb-2">
          {{ product.name }}
        </h3>
        <p class="text-brown-600 dark:text-brown-400 mb-4">
          {{ product.description }}
        </p>
        <!-- <div class="text-2xl font-bold text-brown-900 dark:text-brown-100 mb-6">
          ${{ product.price }}
        </div> -->

        <div class="space-y-3">
          <p class="text-sm text-brown-600 dark:text-brown-400 font-medium">
            Shop this item on:
          </p>
          <div class="flex space-x-3">
            <a
              href="https://www.facebook.com/latenue.ave"
              target="_blank"
              class="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors flex-1 justify-center"
            >
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
              <span class="text-sm font-medium">Facebook</span>
            </a>
            <a
              href="https://www.tiktok.com/@latenue.ave"
              target="_blank"
              class="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors flex-1 justify-center"
            >
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"
                />
              </svg>
              <span class="text-sm font-medium">TikTok</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductModal",
  props: {
    show: Boolean,
    product: Object,
  },
  emits: ["close"],
};
</script>
