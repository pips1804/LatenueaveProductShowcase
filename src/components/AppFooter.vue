<template>
  <footer
    class="bg-brown-900 dark:bg-brown-950 text-brown-100 py-12 transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Branding & Social -->
        <div class="col-span-1 md:col-span-2">
          <h3 class="text-2xl font-bold mb-4">Latenue.ave</h3>
          <p class="text-brown-300 dark:text-brown-400 mb-6 max-w-md">
            Discover your personal style with our premium clothing collection.
            Quality, comfort, and style in every piece.
          </p>
          <div class="flex space-x-4">
            <a
              href="https://www.facebook.com/latenue.ave"
              target="_blank"
              class="bg-brown-800 dark:bg-brown-900 p-3 rounded-full hover:bg-brown-700 dark:hover:bg-brown-800 transition-colors"
            >
              <!-- Facebook Icon -->
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@latenue.ave"
              target="_blank"
              class="bg-brown-800 dark:bg-brown-900 p-3 rounded-full hover:bg-brown-700 dark:hover:bg-brown-800 transition-colors"
            >
              <!-- TikTok Icon -->
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Links -->
        <div class="md:col-span-2">
          <div class="grid grid-cols-2 gap-8">
            <div>
              <h4 class="font-semibold mb-4">Quick Links</h4>
              <ul class="space-y-2 text-brown-300 dark:text-brown-400">
                <li>
                  <a href="#" @click.prevent="openModal('About Us')"
                    >About Us</a
                  >
                </li>
                <li>
                  <a href="#" @click.prevent="openModal('Contact')">Contact</a>
                </li>
                <li>
                  <a href="#" @click.prevent="openModal('Shipping Info')"
                    >Shipping Info</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-4">Customer Care</h4>
              <ul class="space-y-2 text-brown-300 dark:text-brown-400">
                <li>
                  <a href="#" @click.prevent="openModal('Privacy Policy')"
                    >Privacy Policy</a
                  >
                </li>
                <li>
                  <a href="#" @click.prevent="openModal('Terms of Service')"
                    >Terms of Service</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <!-- Modal -->
          <Modal
            v-if="isModalOpen"
            :title="modalTitle"
            :content="modalContent"
            @close="isModalOpen = false"
          />
        </div>
      </div>

      <div
        class="border-t border-brown-800 dark:border-brown-900 mt-8 pt-8 text-center text-brown-400 dark:text-brown-500"
      >
        <p>&copy; 2024 Latenue.ave. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import Modal from "./LinksModal.vue";

const isModalOpen = ref(false);
const modalTitle = ref("");
const modalContent = ref("");

const modalData = {
  "About Us":
    "Latenue.ave is a fashion-forward clothing brand dedicated to elegance and simplicity. We aim to bring high-quality, timeless pieces that fit effortlessly into your lifestyle.",
  Contact:
    "You can reach us anytime via email at support@latenueave.com or on social media. We typically respond within 24 hours.",
  "Shipping Info":
    "Orders are processed within 1–3 business days. Standard shipping takes 5–7 days nationwide. International shipping times may vary.",
  "Privacy Policy":
    "We value your privacy. Your personal information is never shared and is used solely to process and improve your experience with Latenue.ave.",
  "Terms of Service":
    "By using our site, you agree to our policies regarding product use, payment, returns, and more. See the full terms on our website.",
};

function openModal(title) {
  modalTitle.value = title;
  modalContent.value =
    modalData[title] || "No content available for this section.";
  isModalOpen.value = true;
}
</script>
