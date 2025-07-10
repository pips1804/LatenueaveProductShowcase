<template>
  <section
    class="relative bg-gradient-to-r from-brown-100 to-brown-200 dark:from-brown-900 dark:to-brown-800 py-20 lg:py-32 overflow-hidden sparkle-bg"
  >
    <!-- Sparkle top-left -->
    <div
      class="absolute inset-0 pointer-events-none z-0 sparkle sparkle-top"
    ></div>

    <!-- Sparkle bottom-right -->
    <div
      class="absolute inset-0 pointer-events-none z-0 sparkle sparkle-bottom"
    ></div>
    <!-- Decorative blobs -->
    <div
      class="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-pink-300/30 dark:bg-yellow-400/10 rounded-full blur-3xl animate-ping"
    ></div>
    <div
      class="absolute bottom-[-100px] right-[-150px] w-[500px] h-[500px] bg-brown-500/20 dark:bg-brown-300/10 rounded-full blur-2xl animate-pulse"
    ></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <!-- Text content -->
        <div class="text-center md:text-left">
          <h2
            class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brown-900 dark:text-brown-100 mb-6 leading-tight"
          >
            Discover Your <br />
            <span class="text-brown-600 dark:text-brown-300"
              >Personal Style</span
            >
          </h2>
          <p
            class="text-lg sm:text-xl text-brown-700 dark:text-brown-300 mb-8 max-w-xl"
          >
            Find curated pieces that reflect your identity — bold, elegant, and
            uniquely you.
          </p>
          <button
            @click="showModal = true"
            class="bg-brown-800 dark:bg-brown-200 text-white dark:text-brown-900 px-6 py-3 rounded-full font-semibold hover:bg-brown-700 dark:hover:bg-brown-300 transition-all shadow-md"
          >
            Shop Now
          </button>
        </div>

        <!-- Floating product cards with hover tilt -->
        <div
          class="relative flex gap-6 overflow-x-auto no-scrollbar items-center justify-center flex-nowrap h-[240px] overflow-y-hidden"
        >
          <div
            v-for="(group, i) in productGroups"
            :key="i"
            class="relative group w-[140px] sm:w-[160px] lg:w-[180px] h-[200px] sm:h-[220px] lg:h-[240px] bg-white dark:bg-brown-800 rounded-xl shadow-xl transition-transform duration-500 hover:scale-105 hover:rotate-1 tilt-card overflow-hidden"
            @mouseenter="productGroups[i].paused = true"
            @mouseleave="productGroups[i].paused = false"
          >
            <!-- Image Transition -->
            <transition-group
              name="fade-scale"
              tag="div"
              class="w-full h-full"
              mode="out-in"
            >
              <img
                :key="group.images[group.currentIndex]"
                :src="group.images[group.currentIndex]"
                alt="Product"
                class="w-full h-full object-cover rounded-xl absolute inset-0"
              />
            </transition-group>

            <!-- Arrows -->
            <div
              class="absolute inset-0 flex items-center justify-between z-10 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <button
                @click="prevImage(i)"
                class="bg-white/80 dark:bg-brown-900/60 p-1 rounded-full shadow hover:scale-110"
              >
                <ChevronLeftIcon
                  class="h-4 w-4 text-brown-800 dark:text-brown-200"
                />
              </button>
              <button
                @click="nextImage(i)"
                class="bg-white/80 dark:bg-brown-900/60 p-1 rounded-full shadow hover:scale-110"
              >
                <ChevronRightIcon
                  class="h-4 w-4 text-brown-800 dark:text-brown-200"
                />
              </button>
            </div>

            <!-- Dots -->
            <div
              class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10"
            >
              <span
                v-for="(img, j) in group.images"
                :key="j"
                class="w-2 h-2 rounded-full"
                :class="[
                  j === group.currentIndex
                    ? 'bg-brown-800 dark:bg-brown-100'
                    : 'bg-brown-300 dark:bg-brown-700',
                ]"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Modal -->
  <!-- Modal -->
  <transition name="fade">
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div
        class="bg-white dark:bg-brown-900 text-brown-900 dark:text-white p-8 rounded-2xl shadow-2xl w-[90%] max-w-md text-center relative animate-fadeIn"
      >
        <!-- Close button -->
        <button
          @click="showModal = false"
          class="absolute top-3 right-3 text-brown-700 dark:text-brown-200 hover:text-red-500 transition"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
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

        <!-- Modal Content -->
        <h3 class="text-2xl font-bold mb-3">Visit Our Shop</h3>
        <p class="text-brown-600 dark:text-brown-300 mb-6">
          Choose your preferred platform:
        </p>

        <div class="flex flex-col gap-4">
          <a
            href="https://www.facebook.com/latenue.ave"
            target="_blank"
            class="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition shadow-md"
          >
            <svg
              class="h-5 w-5 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              />
            </svg>
            Facebook
          </a>

          <a
            href="https://www.tiktok.com/@latenue.ave"
            target="_blank"
            class="flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-full transition shadow-md"
          >
            <svg
              class="h-5 w-5 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"
              />
            </svg>
            TikTok
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowTopRightOnSquareIcon,
  XMarkIcon,
} from "@heroicons/vue/24/solid";

export default {
  name: "HeroSection",
  emits: ["shop-now"],
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
  },
  data() {
    return {
      showModal: false,
      productGroups: [
        {
          name: "Dress",
          images: [
            "/img/products/dresses/1.jpg",
            "/img/products/dresses/2.jpg",
            "/img/products/dresses/3.jpg",
          ],
          currentIndex: 0,
          timer: null,
          paused: false,
        },
        {
          name: "Shirt",
          images: [
            "/img/products/shirts/1.jpg",
            "/img/products/shirts/2.jpg",
            "/img/products/shirts/3.jpg",
          ],
          currentIndex: 0,
          timer: null,
          paused: false,
        },
        {
          name: "Bag",
          images: [
            "/img/products/bags/1.jpg",
            "/img/products/bags/2.jpg",
            "/img/products/bags/3.jpg",
          ],
          currentIndex: 0,
          timer: null,
          paused: false,
        },
      ],
    };
  },
  mounted() {
    this.productGroups.forEach((group, index) => {
      this.startRotation(index);
    });
  },
  beforeUnmount() {
    this.productGroups.forEach((group) => {
      clearInterval(group.timer);
    });
  },
  methods: {
    startRotation(groupIndex) {
      const group = this.productGroups[groupIndex];
      group.timer = setInterval(() => {
        if (!group.paused) {
          this.nextImage(groupIndex);
        }
      }, 4000);
    },
    nextImage(index) {
      const group = this.productGroups[index];
      group.currentIndex = (group.currentIndex + 1) % group.images.length;
    },
    prevImage(index) {
      const group = this.productGroups[index];
      group.currentIndex =
        (group.currentIndex - 1 + group.images.length) % group.images.length;
    },
  },
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Tilt effect */
.tilt-card {
  perspective: 1000px;
}
.tilt-card:hover {
  transform: rotateX(2deg) rotateY(4deg) scale(1.05);
}

/* Shared sparkle base */
.sparkle {
  background-size: 50px 50px;
  background-repeat: repeat;
  background-position: 0 0, 25px 25px;
  background-image: radial-gradient(
      rgba(100, 100, 100, 0.15) 1px,
      transparent 1px
    ),
    radial-gradient(rgba(200, 200, 255, 0.2) 1px, transparent 1px);
  opacity: 0.25;
  pointer-events: none;
  z-index: 0;
}

/* Top sparkle (moves top-left) */
.sparkle-top {
  animation: sparkle-top 12s linear infinite;
}

/* Bottom sparkle (moves bottom-right) */
.sparkle-bottom {
  animation: sparkle-bottom 15s linear infinite reverse;
}

/* Sparkles for dark mode */
.dark .sparkle {
  background-image: radial-gradient(
      rgba(255, 255, 255, 0.25) 1px,
      transparent 1px
    ),
    radial-gradient(rgba(255, 255, 200, 0.2) 1px, transparent 1px);
  opacity: 0.3;
}

@keyframes sparkle-top {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-50px, -50px);
  }
}

@keyframes sparkle-bottom {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
}

/* Fade and slight scale */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.8s ease;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Hide scrollbars */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
