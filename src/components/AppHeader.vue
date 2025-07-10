<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-brown-900 shadow-sm border-b border-brown-200 dark:border-brown-800 transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <h1 class="text-2xl font-bold text-brown-900 dark:text-brown-100">
            Latenue.ave
          </h1>
        </div>

        <!-- Right Section -->
        <div class="flex items-center space-x-3">
          <!-- Desktop Search -->
          <div class="hidden md:block">
            <div class="relative">
              <input
                v-model="searchQuery"
                @input="$emit('search', searchQuery)"
                type="text"
                placeholder="Search products..."
                class="pl-10 pr-4 py-2 rounded-full text-sm bg-brown-100 dark:bg-brown-800 text-brown-900 dark:text-brown-100 placeholder-brown-400 dark:placeholder-brown-500 focus:outline-none focus:ring-2 focus:ring-brown-400 dark:focus:ring-brown-300 transition w-48"
              />
              <svg
                class="absolute left-3 top-2.5 h-4 w-4 text-brown-500 dark:text-brown-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                />
              </svg>
            </div>
          </div>

          <!-- Theme Toggle -->
          <button
            @click="$emit('toggle-theme')"
            class="p-2 rounded-lg text-brown-600 dark:text-brown-300 hover:text-brown-800 dark:hover:text-brown-100 hover:bg-brown-100 dark:hover:bg-brown-800 transition-colors"
          >
            <svg
              v-if="!isDark"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
            <svg
              v-else
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </button>

          <!-- Mobile Search Button -->
          <button
            @click="mobileSearchOpen = !mobileSearchOpen"
            class="md:hidden p-2 rounded-md text-brown-600 dark:text-brown-400 hover:text-brown-800 dark:hover:text-brown-200"
          >
            <svg
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
          </button>

          <!-- Mobile Menu Button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 rounded-md text-brown-600 dark:text-brown-400 hover:text-brown-800 dark:hover:text-brown-200"
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
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex justify-center mt-2 space-x-6">
        <button
          v-for="category in categories"
          :key="category"
          @click="$emit('update-category', category)"
          :class="[
            'px-3 py-2 text-sm font-medium transition-colors',
            selectedCategory === category
              ? 'text-brown-800 dark:text-brown-200 border-b-2 border-brown-800 dark:border-brown-200'
              : 'text-brown-600 dark:text-brown-400 hover:text-brown-800 dark:hover:text-brown-200',
          ]"
        >
          {{ category }}
        </button>
      </nav>

      <!-- Mobile Search Input -->
      <div
        v-if="mobileSearchOpen"
        class="md:hidden px-4 pb-4 pt-2 border-t border-brown-200 dark:border-brown-800"
      >
        <div class="relative">
          <input
            v-model="searchQuery"
            @input="$emit('search', searchQuery)"
            type="text"
            placeholder="Search..."
            class="pl-10 pr-4 py-2 w-full rounded-full text-sm bg-brown-100 dark:bg-brown-800 text-brown-900 dark:text-brown-100 placeholder-brown-400 dark:placeholder-brown-500 focus:outline-none focus:ring-2 focus:ring-brown-400 dark:focus:ring-brown-300 transition"
          />
          <svg
            class="absolute left-3 top-2.5 h-4 w-4 text-brown-500 dark:text-brown-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
            />
          </svg>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden py-4 border-t border-brown-200 dark:border-brown-800"
      >
        <div class="flex flex-col space-y-2">
          <button
            v-for="category in categories"
            :key="category"
            @click="
              $emit('update-category', category);
              mobileMenuOpen = false;
            "
            :class="[
              'px-3 py-2 text-left text-sm font-medium transition-colors',
              selectedCategory === category
                ? 'text-brown-800 dark:text-brown-200 bg-brown-100 dark:bg-brown-800'
                : 'text-brown-600 dark:text-brown-400 hover:text-brown-800 dark:hover:text-brown-200',
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    categories: Array,
    selectedCategory: String,
    isDark: Boolean,
  },
  emits: ["update-category", "toggle-theme", "search"],
  data() {
    return {
      mobileMenuOpen: false,
      mobileSearchOpen: false,
      searchQuery: "",
    };
  },
};
</script>
