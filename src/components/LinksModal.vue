<template>
  <div
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    @click.self="$emit('close')"
  >
    <div
      class="bg-brown-100 dark:bg-brown-900 text-brown-900 dark:text-brown-100 p-6 rounded-xl shadow-2xl max-w-md w-full transition-colors"
    >
      <h3 class="text-xl font-semibold mb-4">{{ title }}</h3>
      <p class="text-sm leading-relaxed mb-6">
        {{ content }}
      </p>

      <!-- Aligned Footer Actions -->
      <div class="flex justify-between items-center flex-wrap gap-4">
        <!-- Social Buttons -->
        <div class="flex gap-3">
          <a
            href="https://facebook.com/yourpage"
            target="_blank"
            class="flex items-center gap-2 border border-brown-400 dark:border-brown-600 text-brown-800 dark:text-brown-100 px-4 py-2 rounded-full hover:bg-brown-200 dark:hover:bg-brown-800 transition"
          >
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              />
            </svg>
            Facebook
          </a>

          <a
            href="https://tiktok.com/@yourhandle"
            target="_blank"
            class="flex items-center gap-2 border border-brown-400 dark:border-brown-600 text-brown-800 dark:text-brown-100 px-4 py-2 rounded-full hover:bg-brown-200 dark:hover:bg-brown-800 transition"
          >
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"
              />
            </svg>
            TikTok
          </a>
        </div>

        <!-- Close Button -->
        <button
          @click="$emit('close')"
          class="bg-brown-800 dark:bg-brown-700 text-white px-4 py-2 rounded-full hover:bg-brown-700 dark:hover:bg-brown-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["title", "content"]);
</script>
