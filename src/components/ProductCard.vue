<template>
  <div
    class="bg-white dark:bg-brown-900 rounded-lg shadow-sm overflow-hidden transition-all duration-300 group hover:shadow-lg hover:-translate-y-1"
  >
    <div
      class="aspect-square bg-brown-100 dark:bg-brown-800 relative overflow-hidden rounded-t-lg"
    >
      <img
        :src="product.image"
        :alt="product.name"
        class="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-300"
      />
      <div class="absolute top-4 right-4">
        <!-- <button
          class="bg-white/80 dark:bg-brown-900/80 backdrop-blur-sm p-2 rounded-full hover:scale-110 transition-transform"
        >
          <svg
            class="h-5 w-5 text-brown-600 dark:text-brown-400"
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
        </button> -->
      </div>
    </div>
    <div class="p-4">
      <h4 class="font-semibold text-brown-900 dark:text-brown-100 mb-1">
        {{ product.name }}
      </h4>
      <p class="text-brown-600 dark:text-brown-400 text-sm mb-4 line-clamp-2">
        {{ product.description }}
      </p>

      <!-- Button aligned right -->
      <div class="flex justify-end">
        <button
          @click="$emit('view-product', product)"
          class="bg-brown-800 dark:bg-brown-200 text-brown-100 dark:text-brown-900 px-4 py-2 rounded-full text-sm hover:bg-brown-700 dark:hover:bg-brown-300 transition-colors"
        >
          View Product
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: Object,
  },
  emits: ["view-product"],
};
</script>
