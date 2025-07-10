<template>
  <div
    class="bg-white dark:bg-brown-900 rounded-2xl border border-brown-200 dark:border-brown-800 shadow-md overflow-hidden transition-all duration-300 group hover:shadow-lg hover:-translate-y-1"
  >
    <div class="relative aspect-square overflow-hidden">
      <img
        :src="product.image"
        :alt="product.name"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <!-- Gradient overlay on hover -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      ></div>

      <!-- Floating button -->
      <button
        @click="$emit('view-product', product)"
        class="absolute bottom-3 right-3 bg-white dark:bg-brown-700 text-sm px-3 py-1.5 rounded-full font-medium shadow hover:scale-105 transition-transform"
      >
        View
      </button>

      <!-- Optional badge -->
      <div
        v-if="product.isNew"
        class="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full shadow"
      >
        NEW
      </div>
    </div>

    <div class="p-4 space-y-1">
      <h4
        class="text-brown-900 dark:text-brown-100 font-semibold text-lg truncate"
      >
        {{ product.name }}
      </h4>
      <p class="text-brown-600 dark:text-brown-300 text-sm truncate">
        {{ product.category }}
      </p>
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
