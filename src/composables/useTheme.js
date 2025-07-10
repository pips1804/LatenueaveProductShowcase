"use client";

import { ref, onMounted, watch } from "vue";

export function useTheme() {
  const isDark = ref(false);

  const toggleTheme = () => {
    isDark.value = !isDark.value;
  };

  const initTheme = () => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      isDark.value = savedTheme === "dark";
    } else {
      // Check system preference
      isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  };

  // Watch for theme changes and save to localStorage
  watch(
    isDark,
    (newValue) => {
      localStorage.setItem("theme", newValue ? "dark" : "light");
      if (newValue) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    { immediate: true }
  );

  onMounted(() => {
    initTheme();
  });

  return {
    isDark,
    toggleTheme,
  };
}
